<?php
namespace Services;

use App\Models\Configuration;
use Illuminate\Support\Facades\Auth;

class ConfigurationServices
{
    public function data()
    {
        return Configuration::paginate();
    }

    public function store()
    {
        return Configuration::create([
            'key' => request()->key,
            'value' => request()->value,
        ]);
    }

    public function update($uuid)
    {
        return Configuration::firstWhere('key', $uuid)
            ->update([
                'key' => request()->key,
                'value' => request()->value,
            ]);
    }

    public function find($uuid)
    {
        return Configuration::firstWhere('key', $uuid);
    }

    public function delete($uuid)
    {
        return Configuration::firstWhere('key', $uuid)->delete();
    }
}
