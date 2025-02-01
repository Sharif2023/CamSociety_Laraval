<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Event; // Import the Event model

use Illuminate\Support\Facades\Log;


class EventController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'start_date' => 'required|date_format:Y-m-d',
            'end_date' => 'required|date_format:Y-m-d',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'rate' => 'required|numeric',
            'description' => 'required|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:40000',
        ]);

        $event = new Event();
        $event->event_name = $request->event_name;
        $event->location = $request->location;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->start_time = $request->start_time;
        $event->end_time = $request->end_time;
        $event->rate = $request->rate;
        $event->description = $request->description;

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $originalFilename = $photo->getClientOriginalName(); // Get original filename

            $storagePath = storage_path('app/public/images/' . $originalFilename); // Destination Path

            // Check if file already exists in 'storage/images/'
            if (!file_exists($storagePath)) {
                // If the image is from another folder, move/copy it to 'storage/images/'
                if ($photo->isValid()) {
                    $photo->storeAs('images', $originalFilename, 'public'); // Copy to 'storage/images/'
                }
            }

            // Save correct path in DB
            $event->photo_url = 'storage/images/' . $originalFilename;
        }

        $event->save();

        // Use Inertia redirect with success message
        return Redirect::route('eventupload')->with('success', 'Event created successfully!');
    }

    //fetch event from db
    public function index()
    {
        $events = Event::all(['id', 'event_name', 'location', 'rate', 'start_date', 'end_date', 'start_time', 'end_time', 'description', 'photo_url']);

        foreach ($events as $event) {
            if ($event->photo_url) {
                $event->photo_url = asset($event->photo_url); // Convert to full URL
            }
        }

        return response()->json($events);
    }
}
