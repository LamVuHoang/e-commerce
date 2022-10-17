<?php

namespace App\Services;

use App\Repositories\AuthenticationRepository;
use Illuminate\Http\JsonResponse;

class AuthenticationService extends BaseService
{
    private AuthenticationRepository $_authenticationRepository;
    public function __construct(AuthenticationRepository $authenticationRepository)
    {
        $this->_authenticationRepository = $authenticationRepository;
    }

    public function logIn($request): JsonResponse
    {
        $data = $request->safe()->only(['contact', 'password']);
        $result = $this->_authenticationRepository->logIn($data);

        if ($result["status"] === 200) return response()->json([
            "data" => $result["data"]
        ], 200);

        return response()->json([
            "message" => $result["message"]
        ], $result["status"]);
    }

    public function signUp($request)
    {
        $data = $request->safe()->only([
            'contact',
            'password',
            'password_confirmation',
        ]);

        $result = $this->_authenticationRepository->signUp($data);

        if ($result["status"] === 200) return response()->json([
            "message" => $result["message"]
        ], 200);

        return response()->json([
            "message" => "Sign Up Unsuccessfully"
        ], 400);
    }

    public function logOut($request): JsonResponse
    {
        $result = $this->_authenticationRepository->logOut($request);

        if ($result["status"] === 200) return response()->json([
            "message" => $result["message"]
        ], 200);

        return response()->json([
            "message" => "Logout Unsucessfully"
        ], 400);
    }

    public function userInformation($request): JsonResponse
    {
        $result = $this->_authenticationRepository->userInformation($request);

        if ($result["status"] === 200) return response()->json([
            "message" => $result["message"]
        ], 200);

        return response()->json([
            "message" => "Error finding User"
        ], 400);
    }
}
