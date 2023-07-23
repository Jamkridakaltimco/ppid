<?php

namespace App\Models;

use App\Models\Base as Model;

class Queue extends Model
{
    protected $table = 'queue';

    public function guest()
    {
        return $this->belongsTo(\App\Models\Guest\Guest::class, 'guest_id', 'id');
    }

}
