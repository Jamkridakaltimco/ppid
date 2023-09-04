<?php

namespace App\Models;

use App\Models\Base as Model;

class Link extends Model
{
    protected $table = 'links';

    protected $guarded = ['id'];

    public $timestamps = false;
}
