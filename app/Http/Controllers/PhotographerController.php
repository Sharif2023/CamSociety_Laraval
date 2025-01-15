<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PhotographerController extends Controller
{
    public function index()
    {
        return Inertia::render('Photographer/Index');
    }
}
