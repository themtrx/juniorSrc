<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/users', function () {
//     $users = User::factory()->count(3)->make();
//     return $users;
// });

Route::post('/users', function ( Request $request ) {
    $users = User::create([
        'name' => $request['username'],
        'email' => 'test1@mai1l.bg',
        'password' => $request['password'],
        'admin' => 0
    ]);

    
    return $users;
});
