<?php

namespace App\Http\Controllers;

use App\Mail\PhotographerApplicationMail;
use App\Models\BookEvent;
use App\Models\PhotographerApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $query = BookEvent::query();

        if (request('title')) {
            $query->where('title', 'like', '%' . request('title') . '%');
        }
        if (request('address')) {
            $query->where('address', 'like', '%' . request('address') . '%');
        }

        // hiring_status active will be shown
        $bookevents = $query->where('hiring_status', 'open')->paginate(12)->onEachSide(1);

        return Inertia::render('BookEvent/Index', [
            'bookevents' => $bookevents,
        ]);
    }

    public function store(Request $request)
    {
        $request->merge([
            'address' => $request->input('address', $request->input('location')),
        ]);

        $user = $request->user();

        if (!$user || !$user->isClient()) {
            return redirect()->route($user?->dashboardRoute() ?? 'dashboard')
                ->with(['error' => 'Only clients can create events.']);
        }

        $validatedData = $request->validate([
            'event_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'rate' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('eventsPhotos', 'events_photos');
        }

        try {
            BookEvent::create([
                'event_name' => $validatedData['event_name'],
                'address' => $validatedData['address'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'start_time' => $validatedData['start_time'],
                'end_time' => $validatedData['end_time'],
                'rate' => $validatedData['rate'],
                'description' => $validatedData['description'] ?? null,
                'photo_url' => $photoPath,
                'created_by' => $user->id,
            ]);

            return redirect()->route('eventbook')->with(['success' => 'Event created successfully.']);
        } catch (\Exception $e) {
            Log::error('Failed to create event', [
                'error' => $e->getMessage(),
            ]);

            return redirect()->route('eventbook')
                ->with(['error' => 'An error occurred while creating the event.']);
        }
    }


    public function show($id)
    {
        $bookevent = BookEvent::findOrFail($id);
        $user = Auth::user();

        $hasApplied = $user?->isPhotographer()
            ? PhotographerApplication::where('event_id', $bookevent->id)
                ->where('user_id', $user->id)
                ->exists()
            : false;

        return Inertia::render('BookEvent/Show', [
            'event' => $bookevent,
            'canApply' => $user?->isPhotographer() && $bookevent->created_by !== $user->id && !$hasApplied,
            'hasApplied' => $hasApplied,
        ]);
    }

    public function apply($eventId)
    {
        $event = BookEvent::findOrFail($eventId);
        $photographer = Auth::user();

        if (!$photographer || !$photographer->isPhotographer()) {
            return back()->with('error', 'Only photographers can apply to events.');
        }

        if ($event->created_by === $photographer->id) {
            return back()->with('error', 'You cannot apply to your own event.');
        }

        if ($event->hiring_status !== 'open') {
            return back()->with('error', 'This event is no longer accepting applications.');
        }

        $application = PhotographerApplication::firstOrCreate([
            'event_id' => $event->id,
            'user_id' => $photographer->id,
        ]);

        if (!$application->wasRecentlyCreated) {
            return back()->with('error', 'You have already applied to this event.');
        }

        $event->increment('application_count');

        if ($event->creator?->email) {
            try {
                Mail::to($event->creator->email)->send(
                    new PhotographerApplicationMail($event, $photographer)
                );
            } catch (\Throwable $exception) {
                Log::warning('Event application email failed', [
                    'event_id' => $event->id,
                    'photographer_id' => $photographer->id,
                    'error' => $exception->getMessage(),
                ]);
            }
        }

        return back()->with('success', 'Application submitted successfully!');
    }
}
