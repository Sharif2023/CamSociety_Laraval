<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePhotoSellRequest;
use App\Http\Requests\UpdatePhotoSellRequest;
use App\Models\PhotoSell;
use Inertia\Inertia;
use App\Http\Resources\PhotoSellResource;

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
            'queryParams' => request()->query()?: null,
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
    public function store(StorePhotoSellRequest $request)
    {
        //
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
