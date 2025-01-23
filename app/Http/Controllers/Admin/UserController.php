<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $query = User::query();

        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('email')) {
            $query->where('email', 'like', '%' . request('email') . '%');
        }
        if (request('role') !== null) {
            $query->where('role', request('role'));
        }

        // select 'id', 'name', 'email', 'role' only
        // $users = $query->select('id', 'name', 'email', 'role')->paginate(12)->onEachSide(1);
        $users = $query->paginate(12)->onEachSide(1);

        return Inertia::render('Admin/Users', [
            'user' => $users,
            'queryParams' => request()->query() ?: null,
        ]);
    }

    public function delete(User $user)
    {
        // Delete the user
        $user->delete();

        // Redirect to the users page with reload page
        return redirect()->route('admin.users', request()->query());
    }

    public function deactivate(User $user)
    {
        // Block the user
        $user->is_active = 0;
        $user->save();

        // Redirect to the users page with reload page
        return redirect()->route('admin.users', request()->query());
    }

    public function activate(User $user)
    {
        // Unblock the user
        $user->is_active = 1;
        $user->save();

        // Redirect to the users page with reload page
        return redirect()->route('admin.users', request()->query());
    }
}
