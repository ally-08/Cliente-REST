<?php

use App\Http\Controllers\EditorialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EditorialControllerAPI;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Visualización de todos los registros
Route::get('/editoriales', [EditorialControllerAPI::class, 'index']);

// Visualización de un registro
Route::get('/editoriales/{id}', [EditorialControllerAPI::class, 'show']);

// Ingreso de datos
Route::post('/editoriales', [EditorialControllerAPI::class, 'store']);

// Actualización de Datos
Route::put('/editoriales/{id}', [EditorialControllerAPI::class, 'update']);

// Eliminación de datos
Route::delete('/editoriales/{id}', [EditorialControllerAPI::class, 'destroy']);
