<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventController;

Route::view('/upload-event', 'upload_event');

Route::post('/events', [EventController::class, 'store'])->name('events.store');

Route::get('/eventbooking', [EventController::class, 'showEvents']);

Route::get('/events/{id}', [EventController::class, 'show'])->name('event.details');

Route::get('/event-booking', [EventController::class, 'show'])->name('event.booking');
?>

