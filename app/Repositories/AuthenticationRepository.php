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
            ->orWhere('phone', $data['contact'])
            ->orWhere('username', $data['contact'])->first();

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
        $user = new User();

        $user->username = $data['username'];
        $user->password = bcrypt($data['password']);
        $user->save();

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

    public function userInformation($request)
    {
        $user = auth('sanctum')->user();

        return [
            'message' => new UserResource($user),
            'status' => 200
        ];
    }
}
