<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $user = User::firstWhere('name', $request->username);

        //Jika Username dan password tidak sesuai
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Username dan Password Tidak Sesuai!'
            ], 401);
        }

        $token = $user->createToken('token-auth')->plainTextToken;

        $response = [
            'status' => 'success',
            'message' => 'Login Successfully',
            'content' => [
                'access_token' => $token,
                'type' => 'Bearer'
            ]
        ];

        return $response;
    }

    public function profile()
    {
        return Auth::user();
    }

    public function logout(Request $request)
    {
        $all_device = $request->get('all_device');

        $user = request()->user();

        !$all_device ? $user->currentAccessToken()->delete() : $user->tokens()->delete();
        $is_all = (!$all_device ? 'a' : 'all');

        // activity()->log($user->username . ' logged out' . $is_all . 'device');
        $response = [
            'status' => 'success',
            'message' => 'Logout ' . $is_all . ' device successfully',
            'errors' => null,
            'content' => null,
        ];

        return $response;
    }

    public function update()
    {
        request()->validate([
            'password' => 'confirmed',
        ]);

        $user = User::find(Auth::user()->id);

        // $user->username = request()->username;
        $user->name = request()->name;
        $user->phone = request()->phone;
        $user->email = request()->email;

        if (request()->password !== 'undefined') {
            $user->password = bcrypt(request()->password);
        }

        if (request()->hasfile('image_profile')) {
            $file = request()->file('image_profile');
            $extension = $file->extension();

            $dir = 'storage/profile/';
            $name = Str::random(32) . '.' . $extension;
            $user->image_profile = $dir . $name;

            $file->move($dir, $name);
        }


        $user->save();

        return $user;
    }
}
