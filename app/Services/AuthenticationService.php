<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Repositories\AuthenticationRepository;
use App\Http\Traits\ApiReponse;
use Illuminate\Http\JsonResponse;


class AuthenticationService extends BaseService
{
    use ApiReponse;

    private AuthenticationRepository $_authenticationRepository;


    public function __construct(AuthenticationRepository $authenticationRepository)
    {
        $this->_authenticationRepository = $authenticationRepository;
    }

    public function signIn($request): JsonResponse
    {
        $data = $request->safe()->only(['username', 'password']);
        $user = $this->_authenticationRepository->signIn($data);

        if (
            $user && Hash::check($data["password"], strval($user->password))
            && $user->state !== 'Blocked'
        ) {
            $token = $user->createToken('authToken')->plainTextToken;

            return $this->successResponse([
                'token' => $token,
                'type' => 'Bearer'
            ], 'Signin Successfully', 201);
        }

        return $this->failureResponse("Credentials is invalid", 200);
    }

    public function signUp($request)
    {
        $data = $request->safe()->only([
            'username',
            'password',
            'password_confirmation',
        ]);

        $user = $this->_authenticationRepository->signUp($data);

        if ($user) {
            $token = $user->createToken('authToken')->plainTextToken;;

            return $this->successResponse([
                'token' => $token,
                'type' => 'Bearer'
            ], 'Signup Successfully', 201);
        }

        return $this->failureResponse("Signup Unsuccessfully", 400);
    }

    public function signOut($request): JsonResponse
    {
        $result = $this->_authenticationRepository->signOut($request);

        if ($result) {
            return $this->successResponse([], 'Signout Successfully');
        }

        return $this->failureResponse([], 'Signout Unsuccessfully', 401);
    }

    public function userInformation($request): JsonResponse
    {
        $user = auth('sanctum')->user();
        if ($user) {
            return $this->successResponse(UserResource::make($user));
        }

        return $this->failureResponse("Error finding User", 401);
    }
}
