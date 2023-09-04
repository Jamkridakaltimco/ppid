<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\LinkService;

class LinkController extends Controller
{
    public function index()
    {
        return LinkService::data();
    }
    public function store()
    {
        return LinkService::store();
    }
    public function update($uuid)
    {
        return LinkService::update($uuid);
    }
    public function show($uuid)
    {
        return LinkService::find($uuid);
    }
    public function destroy($uuid)
    {
        return LinkService::delete($uuid);
    }
}
