<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Facades\Services\DokumenService;

class DokumenController extends Controller
{
    public function index()
    {
        return DokumenService::data();
    }

    public function store()
    {
        return DokumenService::store();
    }

    public function update($uuid)
    {
        return DokumenService::update($uuid);
    }

    public function show($uuid)
    {
        return DokumenService::show($uuid);
    }

    public function destroy($uuid)
    {
        return DokumenService::delete($uuid);
    }
}
