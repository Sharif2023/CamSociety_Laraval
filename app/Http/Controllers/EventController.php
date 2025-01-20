<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Carbon\Carbon;

class EventController extends Controller
{

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'event_name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'start_date' => 'required|date_format:d/m/Y',
            'end_date' => 'required|date_format:d/m/Y',
            'start_time' => 'required',
            'end_time' => 'required',
            'rate' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        // Save the event
        $event = new Event();
        $event->event_name = $request->event_name;
        $event->location = $request->location;
        $event->start_date = Carbon::createFromFormat('d/m/Y', $request->start_date)->format('Y-m-d');
        $event->end_date = Carbon::createFromFormat('d/m/Y', $request->end_date)->format('Y-m-d');
        $event->start_time = $request->start_time;
        $event->end_time = $request->end_time;
        $event->rate = $request->rate;
        $event->description = $request->description;
        $event->save();

        // Handling file upload
        if ($request->hasFile('photo')) {
            $validatedData['photo'] = $request->file('photo')->store('events');
        }

        // Save to database
        Event::create($validatedData);
        dd($request->all());


        return redirect()->back()->with('success', 'Event created successfully!');
    }

    //fetch data for eventbooking
    public function showEvents()
    {
        // Fetch all events from the database
        $events = Event::all();

        return view('eventbooking', compact('events'));
    }

    //To show eventdetails
    public function show($id)
    {
        $event = Event::findOrFail($id); // Fetch the event by its ID
        return view('eventdetails', ['event' => $event]);
    }
}
