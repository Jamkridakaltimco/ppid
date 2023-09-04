<?php

namespace App\Models;

use App\Models\Base as Model;

class Agenda extends Model
{

    protected $table = 'agendas';

    protected $guarded = ['id', 'created_at', 'update_at'];

}
