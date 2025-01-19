<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventController;

Route::get('/eventbooking', [EventController::class, 'showEvents']);
Route::get('/photographer_eventbooking', [EventController::class, 'showPhotographerEvents']);
