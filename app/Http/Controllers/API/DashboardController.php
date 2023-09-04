<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Queue;

class DashboardController extends Controller
{
    public function index()
    {
        $today = date("Y-m-d");
        // $queue = Queue::where('date', $today);
        return [
            'room_a' => Queue::where('date', $today)->where('room_id', 1)->where('status', 1)->orderBy('number', 'ASC')->first(),
            'room_b' => Queue::where('date', $today)->where('room_id', 2)->where('status', 1)->orderBy('number', 'ASC')->first(),
            'room_c' => Queue::where('date', $today)->where('room_id', 3)->where('status', 1)->orderBy('number', 'ASC')->first(),
            'room_d' => Queue::where('date', $today)->where('room_id', 4)->where('status', 1)->orderBy('number', 'ASC')->first(),
            // 'Cek Fisik' => $queue->where('room_id', 1)->oldest()->first(),
        ];
    }

}
