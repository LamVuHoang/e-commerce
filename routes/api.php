<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Admin\AuthenticationController as AdminAuthenticationController;
use App\Http\Controllers\BannerController;
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

Route::post('login', [AuthenticationController::class, 'index']);
Route::post('signup', [AuthenticationController::class, 'store']);
Route::resource('banner', BannerController::class)->only([
    'index'
]);

Route::get('user-test', [AuthenticationController::class, 'test']);


// AUTHENTICATION REQUIRED
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AdminAuthenticationController::class, 'destroy']);
    Route::get('user-information', [AdminAuthenticationController::class, 'userInformation']);
    Route::resource('banner', BannerController::class)->only([
        'store', 'update', 'destroy'
    ]);
});
