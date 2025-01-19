<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string',
            'location' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'rate' => 'required|numeric',  // Changed this to match your form input
            'description' => 'nullable|string',
            'photo' => 'nullable|image|max:2048',
        ]);

        $photoPath = $request->file('photo') ? $request->file('photo')->store('photos', 'public') : null;

        Event::create([
            'user_id' => 1, //auth()->id(),
            'event_name' => $request->event_name,
            'location' => $request->location,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'rate' => $request->rate,  // Changed this to match your form input
            'description' => $request->description,
            'photo_url' => $photoPath,
        ]);

        return redirect()->back()->with('success', 'Event created successfully!');
    }

    public function showEvents()
    {
        // Fetch events from the database
        $events = Event::all();
        return view('eventbooking', compact('events'));
    }

    public function showPhotographerEvents()
    {
        // Fetch events for photographers (same as users, but may be filtered differently)
        $events = Event::all();
        return view('photographer_eventbooking', compact('events'));
    }
}
