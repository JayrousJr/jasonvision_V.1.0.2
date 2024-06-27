<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubService extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['service_id','name','description','image','slug'];

    public function subService(): BelongsTo{
        return $this->belongsTo(Service::class, 'service_id');
    }
}