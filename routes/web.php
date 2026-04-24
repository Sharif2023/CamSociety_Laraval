<?php

use App\Http\Controllers\BlogNTipController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PhotographerController;
use App\Http\Controllers\PhotoSellController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Health check route for Render
Route::get('/health-check', function () {
    return response('UP', 200);
});

// Debug DB route (Remove before production)
Route::get('/debug-db', function () {
    try {
        \Illuminate\Support\Facades\Artisan::call('migrate:status');
        $output = \Illuminate\Support\Facades\Artisan::output();

        $usersCount = \App\Models\User::count();
        $photosCount = \App\Models\PhotoSell::count();
        $eventsCount = \App\Models\BookEvent::count();

        return response()->json([
            'migrate_status' => $output,
            'users_count' => $usersCount,
            'photos_count' => $photosCount,
            'events_count' => $eventsCount,
            'db_path' => config('database.connections.sqlite.database'),
            'env' => app()->environment(),
        ]);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('landing'); // Landing page
Route::redirect('/signup', '/register')->name('signup');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/services', [HomeController::class, 'services'])->name('services');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

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
    Route::get('/photomarket', [PhotoSellController::class, 'index'])->name('photomarket');
    Route::get('/hirephotographer', [HomeController::class, 'hirephotographer'])->name('hirephotographer');
    Route::get('/eventbook', [EventController::class, 'index'])->name('eventbook');
    Route::get('/eventbook/{id}', [EventController::class, 'show'])->name('eventbook.show');
    Route::get('/blogsntips', [HomeController::class, 'blogsntips'])->name('blogsntips');
});

Route::middleware(['auth', 'verified', 'role:photographer'])->group(function () {
    Route::post('/photomarket', [PhotoSellController::class, 'store'])->name('photomarket.store');
    Route::post('/apply/{eventId}', [EventController::class, 'apply'])->name('eventbook.apply');
    Route::get('/photographer-blog-tips', function () {
        return Inertia::render('PhotographerView/PhotographerBlogNTips');
    })->name('photographer.blogtips');
    Route::post('/blogntips', [BlogNTipController::class, 'store'])->name('blogntips.store');
});

Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::post('/eventbook', [EventController::class, 'store'])->name('eventbook.store');
    Route::get('/eventupload', [HomeController::class, 'eventupload'])->name('eventupload');
    Route::post('/event-upload', [EventController::class, 'store'])->name('eventupload.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::put('/cart/{id}', [CartController::class, 'update'])->name('cart.update');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/checkout', [PaymentController::class, 'index'])->name('checkout');
    Route::post('/send-otp', [PaymentController::class, 'sendOTP'])->name('payment.send-otp');
    Route::post('/verify-otp', [PaymentController::class, 'verifyOTP'])->name('payment.verify-otp');
});

// Transaction routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    Route::get('/transaction-success', [TransactionController::class, 'successPage'])->name('transaction.success');
});

Route::get('/blogntips', [BlogNTipController::class, 'index'])->name('blogntips.index');
Route::middleware(['auth', 'verified'])->get('/events', [EventController::class, 'index'])->name('events.index');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin-auth.php';
