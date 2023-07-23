<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Queue;
use Auth;

class QueueController extends Controller
{
    public function index()
    {
        $auth  = Auth::user();
        $today = date("Y-m-d");

        if($auth->level === 'operator'){
            return Queue::with('guest')->where('date', $today)->where('room_id', $auth->room_id)->where('status', 0)->get();
        }
        return Queue::with('guest')->where('date', $today)->whereIn('status', [0,1,2])->get();
    }

    public function store()
    {
        $today = date("Y-m-d");

        $data = Queue::where('date', $today)->where('room_id', request()->room_id)->latest()->first();

        $queue             = new Queue;
        $queue->date       = $today;
        $queue->room_id    = request()->room_id;
        $queue->prefix     = request()->room_id;
        $queue->number     = data_get($data, 'number', 0) + 1;
        $queue->guest_id        = request()->guest_id;
        $queue->number_police   = request()->number_police;
        $queue->number_part     = request()->number_part;
        $queue->number_machine  = request()->number_machine;
        $queue->status  = 0;
        $queue->save();
    }

    public function update($uuid)
    {
        $queue          = Queue::firstWhere('uuid', $uuid);
        // $queue->room_id = request()->room_id;
        // $queue->prefix  = request()->room_id;
        $queue->status  = request()->status;
        $queue->save();

        return $queue;
    }

}
