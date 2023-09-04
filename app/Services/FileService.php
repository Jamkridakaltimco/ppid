<?php
namespace Services;

use App\Models\File;
use Illuminate\Support\Facades\Auth;

class FileService
{
    public function data()
    {
        return File::paginate();
    }

    public function store()
    {

        return File::create([
            'name' => request()->name,
            'type' => 'file',
            'path' => request()->path,
        ]);
    }

    public function update($uuid)
    {
        return File::firstWhere('uuid', $uuid)
            ->update([
                'name' => request()->name,
                'path' => request()->path,
            ]);
    }

    public function find($uuid)
    {
        return File::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return File::firstWhere('uuid', $uuid)->delete();
    }
}
