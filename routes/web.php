<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PhotographerController;
use App\Http\Controllers\PhotoSellController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TransactionController;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('landing'); // Landing page
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/signup', [HomeController::class, 'signup'])->name('signup');

// User routes
Route::middleware(['auth', 'verified', 'role:user',])->group(function () {
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
    Route::get('/photomarket', [PhotoSellController::class, 'index'])->name('photomarket');
    Route::post('/photomarket', [PhotoSellController::class, 'store']);
    Route::get('/hirephotographer', [HomeController::class, 'hirephotographer'])->name('hirephotographer');
    Route::get('/eventbook', [EventController::class, 'index'])->name('eventbook');
    Route::post('eventbook', [EventController::class, 'store'])->name('eventbook.store');
    Route::get('/eventbook/{id}', [EventController::class, 'show'])->name('eventbook.show');
    Route::post('/apply/{eventId}', [EventController::class, 'apply']);
    Route::get('/blogsntips', [HomeController::class, 'blogsntips'])->name('blogsntips');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::put('/cart/{id}', [CartController::class, 'update'])->name('cart.update');
});



// Route::post('/payment/initiate', [PaymentController::class, 'initiatePayment']);
// Route::post('/payment/verify', [PaymentController::class, 'verifyPayment']);

Route::get('/payment/sendmail', [PaymentController::class, 'sendMail']);
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/checkout', [PaymentController::class, 'index'])->name('checkout');
    Route::post('send-otp', [PaymentController::class, 'sendOTP']);
    Route::post('verify-otp', [PaymentController::class, 'verifyOTP']);
});

// Transaction routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    Route::get('/transaction-success', [TransactionController::class, 'successPage'])->name('transaction.success');

});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin-auth.php';
