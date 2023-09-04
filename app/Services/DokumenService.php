<?php

namespace Services;

use Illuminate\Support\Str;
use App\Models\Dokumen;
use Illuminate\Support\Facades\Auth;

class DokumenService
{
    public function data()
    {
        return Dokumen::paginate();
    }

    public function store()
    {
        $dokumen = new Dokumen;
        $dokumen->type = request()->type;
        $dokumen->type_id = request()->type_id?:0;
        $dokumen->is_public= request()->is_public;
        $dokumen->name = request()->name;
        $dokumen->deskripsi = request()->deskripsi;

        if (request()->hasfile('path')){
            $file = request()->file('path');
            $extension = $file->extension();

            $dir = 'storage/'.request()->type.'/';
            $name = Str::random(32) . '.' . $extension;
            $dokumen->path = $dir . $name;

            $file->move($dir, $name);
        }

        $dokumen->save();

        return $dokumen;
    }

    public function update($uuid)
    {
        return Dokumen::firstWhere('uuid', $uuid)
        ->update([
            'type' => request()->type,
            'type_id' => request()->type_id,
            'is_public' => request()->is_public,
            'path' => request()->path,
            'name' => request()->name,
        ]);
    }

    public function find($uuid)
    {
        return Dokumen::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Dokumen::firstWhere('uuid', $uuid)->delete();
    }
}
