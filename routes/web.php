<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventController;

Route::view('/upload-event', 'upload_event');
Route::post('/events', [EventController::class, 'store']);
Route::post('/events', [EventController::class, 'store'])->name('events.store');
?>

