<?php

namespace App\Http\Controllers;

use App\Models\BlogNTip;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        return Inertia::render('HirePhotographer/Index');
    }

    public function eventbook()
    {
        return Inertia::render('BookEvent/Index');
    }

    public function blogsntips()
    {
        $posts = BlogNTip::with('user')
            ->latest()
            ->take(12)
            ->get()
            ->map(function (BlogNTip $post) {
                $imageUrl = $post->image
                    ? Storage::disk('public')->url($post->image)
                    : 'https://picsum.photos/400/200?random='.$post->id;

                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => Str::limit(strip_tags($post->content), 110),
                    'author' => $post->user?->name ?? 'CamSociety',
                    'image' => $imageUrl,
                    'modalContent' => [
                        'title' => $post->title,
                        'image' => $imageUrl,
                        'content' => $post->content,
                        'likes' => 0,
                    ],
                ];
            })
            ->values();

        return Inertia::render('BlogTip/Index', [
            'posts' => $posts,
        ]);
    }

    public function eventupload()
    {
        return Inertia::render('BookEvent/EventUpload');
    }
}
