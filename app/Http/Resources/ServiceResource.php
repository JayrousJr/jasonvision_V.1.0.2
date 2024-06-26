<?php

namespace App\Http\Resources;

use App\Models\SubService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'image' => $this->image,
            'id' =>$this->id,
            'slug' =>$this->slug,
            // "subservice"=> new SubServiceResource($this->subServicesList)
        ];
    }
}