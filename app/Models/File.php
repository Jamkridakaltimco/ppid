<?php

namespace App\Models;

use App\Models\Base as Model;

class File extends Model
{

    protected $table = 'files';

    protected $guarded = ['id', 'created_at', 'update_at'];

    public function scopePostImage($query, $type)
    {
        return $query->where([['filable_type', 'post'], ['filable_id', $type]]);
    }
}
