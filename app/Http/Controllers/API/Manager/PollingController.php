<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\PollingService;

class PollingController extends Controller
{
    public function index()
    {
        return PollingService::data();
    }
    public function store()
    {
        return PollingService::store();
    }
    public function update($uuid)
    {
        return PollingService::update($uuid);
    }
    public function show($uuid)
    {
        return PollingService::find($uuid);
    }
    public function destroy($uuid)
    {
        return PollingService::delete($uuid);
    }
}
