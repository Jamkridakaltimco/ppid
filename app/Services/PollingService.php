<?php
namespace Services;

use App\Models\Polling;
use Illuminate\Support\Facades\Auth;

class PollingServices
{
    public function data()
    {
        return Polling::paginate();
    }

    public function store()
    {
        return Polling::create([
            'type' => request()->type,
            'parent' => request()->parent,
            'content' => request()->content,
            'score' => request()->score,
            'status' => request()->status,
        ]);
    }

    public function update($uuid)
    {
        return Polling::firstWhere('uuid', $uuid)
            ->update([
                'type' => request()->type,
                'parent' => request()->parent,
                'content' => request()->content,
                'score' => request()->score,
                'status' => request()->status,
            ]);
    }

    public function find($uuid)
    {
        return Polling::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Polling::firstWhere('uuid', $uuid)->delete();
    }
}
