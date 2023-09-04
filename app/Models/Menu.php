<?php

namespace App\Models;

use App\Models\Base as Model;

class Menu extends Model
{

    protected $table = 'menus';

    protected $guarded = ['id', 'created_at', 'update_at'];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeUnlock($query)
    {
        return $query->where('lock', 0);
    }
}
