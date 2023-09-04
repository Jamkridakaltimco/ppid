<?php

namespace App\Models\Post;

use App\Models\Base as Model;

class Post extends Model
{

    protected $table = 'posts'; 
    protected $guarded = ['id', 'created_at', 'update_at'];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function category()
    {
        return $this->belongsTo(\App\Models\Post\Category::class, 'category_id', 'id');
    }

    public function menu()
    {
        return $this->belongsTo(\App\Models\Menu::class, 'type_id', 'id');
    }
} 
