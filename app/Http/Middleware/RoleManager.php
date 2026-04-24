<?php

namespace App\Http\Middleware;

use App\Models\User;
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

        $user = Auth::user();

        $roleMatched = $user instanceof User && (
            ($role === 'user' && $user->isClient()) ||
            ($role === 'photographer' && $user->isPhotographer())
        );

        if ($roleMatched) {
            return $next($request);
        }

        if ($user instanceof User) {
            return redirect()->route($user->dashboardRoute());
        }

        return redirect()->route('landing');
    }
}
