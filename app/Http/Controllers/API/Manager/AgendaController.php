<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\AgendaService;

class AgendaController extends Controller
{
    public function index()
    {
        return AgendaService::data();
    }
    public function store()
    {
        return AgendaService::store();
    }
    public function update($uuid)
    {
        return AgendaService::update($uuid);
    }
    public function show($uuid)
    {
        return AgendaService::find($uuid);
    }
    public function destroy($uuid)
    {
        return AgendaService::delete($uuid);
    }

}
