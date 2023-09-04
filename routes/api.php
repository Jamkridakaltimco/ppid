<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\UserController as PenggunaController;
use App\Http\Controllers\API\GuestController;
use App\Http\Controllers\API\QueueController;
use App\Http\Controllers\API\Manager\MenuController;
use App\Http\Controllers\API\Manager\AgendaController;
use App\Http\Controllers\API\Manager\PostCategoryController;
use App\Http\Controllers\API\Manager\PostController;
use App\Http\Controllers\API\DokumenController;
use App\Http\Controllers\API\Manager\FileController;
use App\Http\Controllers\API\Manager\GalleryController;


Route::post('login', [AuthController::class, 'login']);
Route::get('dashboard', [DashboardController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('profile/update', [AuthController::class, 'update']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::apiResource('pengguna', PenggunaController::class);

    Route::apiResource('guest', GuestController::class);
    Route::apiResource('queue', QueueController::class);

    Route::apiResource('menu', MenuController::class);
    Route::apiResource('agenda', AgendaController::class);
    Route::apiResource('categories', PostCategoryController::class);
    Route::apiResource('post', PostController::class);
    Route::apiResource('dokumen', DokumenController::class);
    Route::apiResource('file', FileController::class);
    Route::apiResource('galeri', GalleryController::class);

});



