<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EditorialController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    header("location: localhost:8000/api/editoriales");
});


Route::get('/hola', function () {
    return 'Hola mundop';
});

Route::get('/hola/en', function () {
    return 'Hello world';
});


Route::get('/hola/{nombre}', function ($nombre) {
    return "welcome $nombre";
});

Route::get('/hola/en', function () {
    return 'Hello world';
});

Route::controller(EditorialController::class)->group(function(){
    Route::get('/editoriales','index' );
    Route::get('/editoriales/create','create');
    Route::get('/editoriales/edit/{id}','edit');
});

// Route::get/post('nombreRuta', [Controlador::class, 'funcionControlador'])


