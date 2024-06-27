<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['user_id','post_id','parent_id','content'];

    public function userComment() : BelongsTo {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function post() : BelongsTo {
        return $this->belongsTo(BlogPost::class, 'post_id');
    }
}