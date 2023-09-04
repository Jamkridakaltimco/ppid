<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Polling extends Model
{
    use HasFactory;

    protected $table = 'pollings';

    protected $guarded = ['id', 'created_at', 'update_at'];
}
