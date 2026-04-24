<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePhotoSellRequest;
use App\Http\Requests\UpdatePhotoSellRequest;
use App\Http\Resources\PhotoSellResource;
use App\Models\PhotoSell;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PhotoSellController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = PhotoSell::query()->with('creator');

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
        $user = $request->user();

        if (!$user || !$user->isPhotographer()) {
            return redirect()->route($user?->dashboardRoute() ?? 'dashboard')
                ->with(['error' => 'Only photographers can list photos for sale.']);
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:1',
            'category' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:40000',
        ]);

        $photoPath = $request->file('photo')->store('PhotoSells', 'photo_sells');

        try {
            DB::beginTransaction();

            PhotoSell::create([
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'category' => $request->category,
                'image_url' => $photoPath,
                'created_by' => $user->id,
            ]);

            DB::commit();

            return redirect()->route('photomarket')->with(['success' => 'Photo uploaded successfully.']);
        } catch (\Throwable $exception) {
            DB::rollBack();

            Log::error('Photo upload failure', [
                'user_id' => $user->id,
                'error' => $exception->getMessage(),
            ]);

            return redirect()->route('photomarket')->with(['error' => 'Asset synchronization failed.']);
        }
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
