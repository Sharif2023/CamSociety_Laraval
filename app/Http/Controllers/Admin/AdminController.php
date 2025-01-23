<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $query = Admin::query();

        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('email')) {
            $query->where('email', 'like', '%' . request('email') . '%');
        }

        // select 'id', 'name', 'email', 'role' only
        // $users = $query->select('id', 'name', 'email', 'role')->paginate(12)->onEachSide(1);
        $users = $query->paginate(12)->onEachSide(1);

        return Inertia::render('Admin/Admin', [
            'admins' => $users,
            'queryParams' => request()->query() ?: null,
        ]);
    }
}
