<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' =>$this->name,
            'description' =>$this->description,
            'slug' => $this->slug,
            'image' =>$this->image,
            'id' =>$this->id,
            'service_id' => $this->subService,
        ];
    }
}