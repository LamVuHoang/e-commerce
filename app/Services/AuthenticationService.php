<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
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

        if (Hash::check($data["password"], strval($user->password))) {
            $token = $user->createToken('authToken')->plainTextToken;

            return $this->successResponse([
                'token' => $token,
                'type' => 'Bearer'
            ], 201);
        }

        return $this->failureResponse([
            "signin" => [
                "Credentials is invalid"
            ]
        ], 401);
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
            ], 201);
        }

        return $this->failureResponse([
            "signup" => [
                "Signup Unsuccessfully"
            ]
        ], 401);
    }

    public function signOut($request): JsonResponse
    {
        $result = $this->_authenticationRepository->signOut($request);

        if ($result) {
            return $this->successResponse([], 200);
        }

        return $this->failureResponse([
            "signout" => [
                "Signout Unsuccessfully"
            ]
        ], 401);
    }

    public function userInformation($request): JsonResponse
    {
        $user = auth('sanctum')->user();
        if ($user) {
            return $this->successResponse(UserResource::make($user));
        }

        return $this->failureResponse([
            "user_information" => [
                "Unable to retreive User information"
            ]
        ], 401);
    }
}
