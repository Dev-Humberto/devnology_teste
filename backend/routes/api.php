<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SaleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request){
        return $request->user();
    });
    Route::post('/login', [AuthController::class, 'logout']);
    Route::post('/users', \App\Http\Controllers\Api\UserController::class);
});

Route::group(['middleware' => 'auth'], function () {
    // All routes here will require authentication
    Route::post('/sale', [AuthController::class, 'sale']);
});*/

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/sale', [SaleController::class, 'store']);

Route::apiResource('sales', \App\Http\Controllers\Api\SaleController::class);



