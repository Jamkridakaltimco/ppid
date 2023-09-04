<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Facades\Services\ContactService;

class ContactController extends Controller
{
    public function index()
    {
        return ContactService::data();
    }
    public function store()
    {
        return ContactService::store();
    }
    public function update($uuid)
    {
        return ContactService::update($uuid);
    }
    public function show($uuid)
    {
        return ContactService::find($uuid);
    }
    public function destroy($uuid)
    {
        return ContactService::delete($uuid);
    }
}
