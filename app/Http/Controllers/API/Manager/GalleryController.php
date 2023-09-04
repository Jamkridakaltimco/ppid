<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\GalleryService;

class GalleryController extends Controller
{
    public function index()
    {
        return GalleryService::data();
    }
    public function store()
    {
        return GalleryService::store();
    }
    public function update($uuid)
    {
        return GalleryService::update($uuid);
    }
    public function show($uuid)
    {
        return GalleryService::find($uuid);
    }
    public function destroy($uuid)
    {
        return GalleryService::delete($uuid);
    }
}
