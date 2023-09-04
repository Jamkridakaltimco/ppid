<?php
namespace Services;

use App\Models\Gallery;
use Illuminate\Support\Facades\Auth;

class GalleryService
{
    public function data()
    {
        $type = request()->get('type')?:'Foto';

        return Gallery::where('type', $type)->paginate();
    }

    public function store()
    {
        return Gallery::create([
            'type' => request()->type,
            'caption' => request()->caption,
            'slug' => '-',
            'link' => request()->link,
            'tags' => request()->tags,
            'description' => request()->description,
            'status' => request()->status,
        ]);
    }

    public function update($uuid)
    {
        return Gallery::firstWhere('uuid', $uuid)
            ->update([
                'type' => request()->type,
                'caption' => request()->caption,
                'link' => request()->link,
                'tags' => request()->tags,
                'description' => request()->description,
                'status' => request()->status,
            ]);
    }

    public function find($uuid)
    {
        return Gallery::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Gallery::firstWhere('uuid', $uuid)->delete();
    }
}
