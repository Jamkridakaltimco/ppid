<?php

namespace App\Models;

use App\Models\Base as Model;

class Dokumen extends Model
{
    protected $table = 'dokumen';

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
