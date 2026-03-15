<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome');
    }

    public function login()
    {
        return view('LandingPage.login');
    }

    public function admin()
    {
        return Inertia::render('Admin/Index');
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function logout()
    {
        return Inertia::render('LandingPage/Index');
    }

    public function signup()
    {
        return view('LandingPage.signup');
    }

    public function hirephotographer()
    {
        $photographers = \App\Models\User::where('role', 1)->paginate(12);

        return Inertia::render('HirePhotographer/Index', [
            'photographers' => \App\Http\Resources\UserResource::collection($photographers)
        ]);
    }

    public function eventbook()
    {
        return Inertia::render('BookEvent/Index');
    }

    public function blogsntips()
    {
        return Inertia::render('BlogTip/Index');
    }

    public function eventupload()
    {
        return Inertia::render('BookEvent/EventUpload');
    }

    public function about()
    {
        return Inertia::render('Landing/About');
    }

    public function services()
    {
        return Inertia::render('Landing/Services');
    }

    public function contact()
    {
        return Inertia::render('Landing/Contact');
    }
}
