<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PhotoSellResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'category' => $this->category,
            'image_url' => $this->image_url,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at ? $this->created_at->format('M d, Y') : null,
            'creator' => $this->creator ? new UserResource($this->creator) : null,
        ];
    }
}
