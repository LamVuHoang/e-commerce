<?php

namespace App\Repositories;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthenticationRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = User::query();
    }

    public function logIn($data)
    {
        $user = $this->query->where('mail', $data['contact'])
            ->orWhere('phone', $data['contact'])->first();

        if ($user && Hash::check($data['password'], $user['password'])) {
            $token = $user->createToken('authToken')->plainTextToken;

            return [
                "data" => [
                    "token" => $token,
                    "token_type" => "Bearer",
                ],
                "message" => "Login Successfully",
                "status" => 200
            ];
        }

        return [
            "message" => "Credentials is invalid",
            "status" => 400
        ];
    }

    public function signUp($data)
    {
        $newData = $this->query->create([
            "contact" => $data['email'],
            "password" => bcrypt($data['password']),
        ]);

        return [
            'message' => 'Sign Up Successfully',
            'status' => 200
        ];
    }

    public function logOut($request)
    {
        $request->user()->currentAccessToken()->delete();

        return [
            'message' => 'Log out Successfully',
            'status' => 200
        ];
    }
}
