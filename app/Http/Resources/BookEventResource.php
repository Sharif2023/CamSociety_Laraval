<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookEventResource extends JsonResource
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
            'event_name' => $this->event_name,
            'address' => $this->address,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'start_time' => $this->start_time,
            'end_time' => $this->end_time,
            'rate' => $this->rate,
            'description' => $this->description,
            'photo_url' => $this->photo_url,
            'hiring_status' => $this->hiring_status,
            'application_count' => $this->application_count,
            'creator' => $this->creator ? new UserResource($this->creator) : null,
        ];
    }
}
