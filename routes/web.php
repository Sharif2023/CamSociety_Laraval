<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PhotographerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('landing'); // Landing page
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/signup', [HomeController::class, 'signup'])->name('signup');

// User routes
Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
});

// Photographer routes
Route::prefix('photographer')->middleware(['auth', 'verified', 'role:photographer'])->group(function () {
    Route::get('/dashboard', [PhotographerController::class, 'index'])->name('photographer.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/photomarket', [HomeController::class, 'photomarket'])->name('photomarket');
    Route::get('/hirephotographer', [HomeController::class, 'hirephotographer'])->name('hirephotographer');
    Route::get('/eventbook', [HomeController::class, 'eventbook'])->name('eventbook');
    Route::get('/blogsntips', [HomeController::class, 'blogsntips'])->name('blogsntips');
    
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin-auth.php';
