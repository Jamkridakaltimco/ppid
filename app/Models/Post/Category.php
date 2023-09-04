<?php

namespace App\Models\Post;

use App\Models\Base as Model;

class Category extends Model
{
    protected $guarded = ['id', 'created_at', 'update_at'];

    protected $table = 'post_categories';
}
