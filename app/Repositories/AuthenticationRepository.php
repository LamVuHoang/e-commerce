<?php

namespace App\Repositories;

use App\Models\User;

class AuthenticationRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = User::query();
    }

    public function logIn($data)
    {
        return $this->query->where('mail', $data['contact'])
            ->orWhere('phone', $data['contact'])
            ->orWhere('username', $data['contact'])->first();
    }

    public function signUp($data)
    {
        $user = new User();
        $user->username = $data['username'];
        $user->password = $data['password'];
        $user->save();

        return $user;
    }

    public function logOut($request)
    {
        return $request->user()->currentAccessToken()->delete();
    }
}
