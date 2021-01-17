<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    public function registerProfile (Request $request)
    {
        $passwordConfirm = $request->validate([
            'password' => 'required',
            'password_confirmation' => 'required|same:password'
        ]);
    
        $uniqueName = $request->validate([
            'username' => 'required|min:4|unique:App\Models\User,name',
        ]);

        $validEmail = $request->validate([
            'email' => 'email:rfc,dns'
        ]);
    
        $uniqueEmail = $request->validate([
            'email' => 'required|unique:App\Models\User,email'
        ]);
    
        $user = User::create([
            'name' => $request['username'],
            'email' => $request['email'],
            'password' => $request['password'],
            'admin' => 0
        ]);
    
        
        return response()->json([$user]);
    }
}
