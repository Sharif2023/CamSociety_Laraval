<?php

namespace App\Http\Controllers;

use App\Mail\PhotographerApplicationMail;
use App\Models\BookEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // Validate the form data
        $validatedData = $request->validate([
            'event_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'rate' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Optional file validation
        ]);

        // Handle file upload if photo is provided
        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('eventsPhotos', 'events_photos');
        }

        // Create the event in the database
        try {
            $bookevent = BookEvent::create([
                'event_name' => $validatedData['event_name'],
                'address' => $validatedData['address'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'start_time' => $validatedData['start_time'],
                'end_time' => $validatedData['end_time'],
                'rate' => $validatedData['rate'],
                'description' => $validatedData['description'] ?? null,
                'photo_url' => $photoPath, // Store the file path or null
                'created_by' => Auth::id() // Ensure the user is authenticated
            ]);

            return redirect()->route('eventbook')->with(['success'=> 'Event created successfully']);
        } catch (\Exception $e) {
            // Handle any errors (e.g., database issues)
            return redirect()->route('eventbook')->with(['error'=> 'An error occurred while creating the event']);
        }
    }


    public function show($id)
    {
        $bookevent = BookEvent::findOrFail($id);

        return Inertia::render('BookEvent/Show', [
            'event' => $bookevent,
        ]);
    }

    public function apply($eventId)
    {
        $event = BookEvent::findOrFail($eventId); // Find the event or fail if not found
        $photographer = Auth::user(); // Get the authenticated user

        // Check if the user has already applied for this event
        // if (PhotographerApplicationMail::where('id', $photographer->id)->where('id', $eventId)->exists()) {
        //     return response()->json(['message' => 'You have already applied for this event'], 400);
        // }

        // Store the application
        // PhotographerApplicationMail::create([
        //     'user_id' => $photographer->id,
        //     'event_id' => $eventId,
        // ]);

        // Increment the application count in the event
        $event->increment('application_count');

        // Send email to the event creator
        Mail::to($event->creator->email)->send(new PhotographerApplicationMail($event, $photographer));

        return redirect()->route('eventbook')->with('success', 'Application submitted successfully!');
    }
}
