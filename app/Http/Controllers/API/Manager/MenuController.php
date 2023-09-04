<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\MenuService;

class MenuController extends Controller
{
    public function index()
    {
        return MenuService::data();
    }
    public function store()
    {
        return MenuService::store();
    }
    public function update($uuid)
    {
        return MenuService::update($uuid);
    }
    public function show($uuid)
    {
        return MenuService::find($uuid);
    }
    public function destroy($uuid)
    {
        return MenuService::delete($uuid);
    }
}
