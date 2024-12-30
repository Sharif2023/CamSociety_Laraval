<?php

namespace App\Http\Controllers;


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
}
