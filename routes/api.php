<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\SubfolderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public routes 
Route::middleware(['cors'])->group(function () {
    Route::resource("/files",FileController::class);
    Route::resource("/folders",FolderController::class);
    Route::resource("/subfolders",SubfolderController::class);
    Route::get("/folders/files/{id}",[FolderController::class,"getFiles"]);
    Route::get("/folders/subfolders/{id}",[FolderController::class,"getSubfolders"]);
    Route::get("/subfolders/files/{id}",[SubfolderController::class,"getFiles"]);
    Route::get("/subfolders/folders/{id}",[SubfolderController::class,"getFolders"]);
});
