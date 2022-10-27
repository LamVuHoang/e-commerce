<?php

namespace App\Http\Controllers;

use App\Services\AuthenticationService;
use App\Http\Requests\LogInRequest;
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
    public function index(LogInRequest $request): JsonResponse
    {
        return $this->_authenticationService->logIn($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SignUpRequest $request): JsonResponse
    {
        return $this->_authenticationService->signUp($request);
    }

    public function test()
    {
        return response()->json([
            "code" => 200,
            "data" => "Data Retreived Successfully"
        ]);
    }
}
