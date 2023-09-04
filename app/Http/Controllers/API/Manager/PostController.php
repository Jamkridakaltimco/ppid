<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\PostService;

class PostController extends Controller
{
    public function index()
    {
        return PostService::data();
    }
    public function store()
    {
        return PostService::store();
    }
    public function update($uuid)
    {
        return PostService::update($uuid);
    }
    public function show($uuid)
    {
        return PostService::find($uuid);
    }
    public function destroy($uuid)
    {
        return PostService::delete($uuid);
    }
}
