<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $role
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $authUserRole = Auth::user()->role; // Assume `role` is an integer: 0 = admin, 1 = user

        // Role-based access control
        if (($role === 'user' && $authUserRole === 1)) {
            return $next($request);
        }

        // Redirect to respective dashboards if unauthorized
        if ($authUserRole === 0) {
            // return redirect()->route('admin.dashboard');
        } elseif ($authUserRole === 1) {
            return redirect()->route('dashboard');
        }

        // Fallback for unexpected roles
        return redirect()->route('login');
    }
}
