<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return view('LandingPage.index');
    }

    public function login()
    {
        return view('LandingPage.login');
    }

    public function signup()
    {
        return view('LandingPage.signup');
    }

    public function photomarket()
    {
        return Inertia::render('PhotoMarket/Index');
    }

    public function hirephotographer()
    {
        return Inertia::render('HirePhotographer/Index');
    }

    public function eventbook()
    {
        return Inertia::render('BookEvent/Index');
    }

    public function blogsntips()
    {
        return Inertia::render('BlogTip/Index');
    }
}
