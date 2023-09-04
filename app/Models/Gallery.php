<?php

namespace App\Models;

use App\Models\Base as Model;

class Gallery extends Model
{
    protected $table = 'galleries';

    protected $guarded = ['id', 'created_at', 'update_at'];

    public function scopeImage($query)
    {
        return $query->where('type', 'image');
    }

    public function scopeVideo($query)
    {
        return $query->where('type', 'video');
    }
}
