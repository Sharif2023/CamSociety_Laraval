<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePhotoSellRequest;
use App\Http\Requests\UpdatePhotoSellRequest;
use App\Models\PhotoSell;
use Inertia\Inertia;
use App\Http\Resources\PhotoSellResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PhotoSellController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = PhotoSell::query();

        if (request('title')) {
            $query->where('title', 'like', '%' . request('title') . '%');
        }
        if (request('category')) {
            $query->where('category', request('category'));
        }


        $photoSells = $query->paginate(12)->onEachSide(1);

        return Inertia::render('PhotoMarket/Index', [
            'photoSells' => PhotoSellResource::collection($photoSells),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:1',
            'category' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10000',
        ]);

        // Handle file upload
        $photoPath = $request->file('photo')->store('PhotoSells', 'photo_sells');

        // Create a new photo sell record in the database
        $photoSell = PhotoSell::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'category' => $request->category,
            'image_url' => $photoPath, // Save the file path
            'created_by' => Auth::id()
        ]);

        return response()->json([
            'message' => 'Photo uploaded successfully!',
            'data' => $photoSell,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(PhotoSell $photoSell)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PhotoSell $photoSell)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhotoSellRequest $request, PhotoSell $photoSell)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PhotoSell $photoSell)
    {
        //
    }
}
