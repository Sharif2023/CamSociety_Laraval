<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['nullable', 'integer', 'in:0,1'],
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'role' => $request->integer('role', User::ROLE_CLIENT),
                'is_active' => 1,
            ]);

            event(new Registered($user));

            Auth::login($user);

            return redirect(route($user->dashboardRoute(), absolute: false))
                ->with(['success' => 'Account created. Welcome!']);
        } catch (\Throwable $exception) {
            \Log::error('Registration Error: ' . $exception->getMessage(), [
                'email' => $request->email,
                'trace' => $exception->getTraceAsString(),
            ]);

            throw $exception;
        }
    }
}
