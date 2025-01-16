<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

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
            'photo' => $this->image_url,
            'category' => $this->category,
            'created_by' => new UserResource($this->createdBy),
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
        ];
    }
}
