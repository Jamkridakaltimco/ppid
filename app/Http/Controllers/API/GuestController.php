<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guest\Guest;
use App\Models\Guest\Vehicle;

class GuestController extends Controller
{
    public function index()
    {
        return Guest::paginate();
    }

    public function list()
    {
        return Guest::get();
    }

    public function show($uuid)
    {
        return Guest::firstWhere('uuid', $uuid);
    }

    public function store()
    {
        $guest = new Guest;
        $guest->nik      = request()->nik;
        $guest->fullname = request()->fullname;
        $guest->phone    = request()->phone?:0;
        $guest->save();

        $this->add_vehicle($guest->uuid);

        return $guest;
    }

    public function update($uuid)
    {
        $guest = Guest::firstWhere('uuid', $uuid);
        $guest->nik = request()->nik;
        $guest->fullname = request()->nama_lengkap;
        $guest->phone = request()->phone;
        $guest->save();

        return $guest;
    }

    public function destory($uuid)
    {
        $guest = Guest::firstWhere('uuid', $uuid);
        $guest->delete();
        return $guest;
    }


    public function add_vehicle($uuid)
    {
        $guest = Guest::firstWhere('uuid', $uuid);

        $vehicle = new Vehicle;
        $vehicle->guest_id  = data_get($guest,'id');
        $vehicle->number_police  = request()->number_police;
        $vehicle->number_machine = request()->number_machine;
        $vehicle->number_part    = request()->number_part;
        $vehicle->save();

        return $vehicle;
    }


}
