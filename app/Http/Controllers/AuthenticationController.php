<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\Services\AuthenticationService;

use App\Http\Requests\SignUpRequest;
use Illuminate\Http\JsonResponse;

class AuthenticationController extends Controller
{
    private AuthenticationService $_authenticationService;
    public function __construct(AuthenticationService $authenticationService)
    {
        $this->_authenticationService = $authenticationService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function signIn(SignInRequest $request): JsonResponse
    {
        return $this->_authenticationService->signIn($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function signUp(SignUpRequest $request): JsonResponse
    {
        return $this->_authenticationService->signUp($request);
    }
}
