<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' =>$this->id,
            'title' =>$this->title,
            'slug' =>$this->slug,
            'image' =>$this->image,
            'location' =>$this->location,
            'content' =>$this->content,
            'instagram' =>$this->instagram,
            'youtube' =>$this->youtube,
            'facebook' =>$this->facebook,
            'twitter' =>$this->twitter,
            'created_at' => (new Carbon($this->created_at))->diffForHumans(),

        ];
    }
}