<?php

namespace App\Http\Controllers;

use App\Models\PhotoSell;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PhotographerController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        
        $photos = PhotoSell::where('created_by', $user->id)->get();

        return Inertia::render('Photographer/Index', [
            'photos' => $photos,
        ]);
    }
}
