<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'user_id'=>new UserResource($this->userComment),
            'post_id'=>$this->post,
            'content'=>$this->content,
            'parent_id'=>$this->parent_id,
            'created_at' => (new Carbon($this->created_at))->diffForHumans(),
        ];
    }
}