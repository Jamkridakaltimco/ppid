<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\ConfigurationService;

class ConfigurationController extends Controller
{
    public function index()
    {
        return ConfigurationService::data();
    }
    public function store()
    {
        return ConfigurationService::store();
    }
    public function update($uuid)
    {
        return ConfigurationService::update($uuid);
    }
    public function show($uuid)
    {
        return ConfigurationService::find($uuid);
    }
    public function destroy($uuid)
    {
        return ConfigurationService::delete($uuid);
    }
}
