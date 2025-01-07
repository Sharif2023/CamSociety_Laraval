<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Register custom middleware alias
        Route::aliasMiddleware('role', \App\Http\Middleware\RoleManager::class);

        // Prefetch Vite assets
        Vite::prefetch(concurrency: 3);
    }
}
