<?php
namespace Services;

use App\Models\Link;
use Illuminate\Support\Facades\Auth;

class LinkServices
{
    public function data()
    {
        return Link::paginate();
    }

    public function store()
    {
        return Link::create([
            'category' => request()->category,
            'name' => request()->name,
            'link' => request()->link,
            'icon' => request()->icon,
            'order' => request()->order,
            'status' => request()->status,
            'lock' => request()->lock,
        ]);
    }

    public function update($uuid)
    {
        return Link::firstWhere('uuid', $uuid)
            ->update([
                'category' => request()->category,
                'name' => request()->name,
                'link' => request()->link,
                'icon' => request()->icon,
                'order' => request()->order,
                'status' => request()->status,
                'lock' => request()->lock,
            ]);
    }

    public function find($uuid)
    {
        return Link::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Link::firstWhere('uuid', $uuid)->delete();
    }
}
