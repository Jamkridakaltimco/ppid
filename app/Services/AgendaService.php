<?php
namespace Services;

use App\Models\Agenda;
use Illuminate\Support\Facades\Auth;

class AgendaService
{
    public function data()
    {
        return Agenda::paginate();
    }

    public function store()
    {
        return Agenda::create([
            'date' => request()->date,
            'time' => request()->time,
            'caption' => request()->caption,
            'description' => request()->description,
            'location' => request()->location,
        ]);
    }

    public function update($uuid)
    {
        return Agenda::firstWhere('uuid', $uuid)
            ->update([
                'date' => request()->date,
                'time' => request()->time,
                'caption' => request()->caption,
                'description' => request()->description,
                'location' => request()->location,
            ]);
    }

    public function find($uuid)
    {
        return Agenda::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Agenda::firstWhere('uuid', $uuid)->delete();
    }
}
