<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClientAssignment extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        "client_id",
        "service_id",
        "maintenance",
        "addition_service",
        "new_service",
        "description",
    ];
    public function client()
    {
        return $this->belongsTo(Client::class, "client_id");
    }
    public function service()
    {
        return $this->belongsTo(Service::class, "service_id");
    }
}