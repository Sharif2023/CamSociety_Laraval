<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
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
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
            $photoPath = $request->file('photo')->store('photos', 'public');
            $event->photo_url = $photoPath;
        }

        $event->save();

        return response()->json(['message' => 'Event uploaded successfully!', 'event' => $event], 200);
    }
}
