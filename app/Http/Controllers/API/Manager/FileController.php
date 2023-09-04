<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\FileService;

class FileController extends Controller
{
    public function index()
    {
        return FileService::data();
    }
    public function store()
    {
        return FileService::store();
    }
    public function update($uuid)
    {
        return FileService::update($uuid);
    }
    public function show($uuid)
    {
        return FileService::find($uuid);
    }
    public function destroy($uuid)
    {
        return FileService::delete($uuid);
    }
}
