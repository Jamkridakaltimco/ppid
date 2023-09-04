<?php

namespace App\Http\Controllers\API\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\PostCategoryService;

class PostCategoryController extends Controller
{
    public function index()
    {
        return PostCategoryService::data();
    }
    public function store()
    {
        return PostCategoryService::store();
    }
    public function update($uuid)
    {
        return PostCategoryService::update($uuid);
    }
    public function show($uuid)
    {
        return PostCategoryService::find($uuid);
    }
    public function destroy($uuid)
    {
        return PostCategoryService::delete($uuid);
    }
}
