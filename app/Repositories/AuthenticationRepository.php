<?php

namespace App\Repositories;

use App\Models\User;

class AuthenticationRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = User::query();
    }

    public function signIn($data)
    {
        return $this->query->where('username', $data['username'])->first();
    }

    public function signUp($data)
    {
        $user = new User();
        $user->username = $data['username'];
        $user->password = $data['password'];
        $user->save();

        return $user;
    }

    public function signOut($request)
    {
        return $request->user()->currentAccessToken()->delete();
    }
}
