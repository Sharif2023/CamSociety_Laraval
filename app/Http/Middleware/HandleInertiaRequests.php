<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $currentUser = $request->user() ?: $request->user('admin');

        $role = match (true) {
            $currentUser instanceof User => $currentUser->roleName(),
            $currentUser instanceof Admin => 'admin',
            default => null,
        };

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $currentUser,
                'role' => $role,
                'is_active' => $currentUser?->is_active,
                'guard' => $role === 'admin' ? 'admin' : 'web',
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
                'status' => $request->session()->get('status'),
                'transaction' => $request->session()->get('transaction'),
                'message' => [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                    'status' => $request->session()->get('status'),
                ],
            ],
        ];
    }
}
