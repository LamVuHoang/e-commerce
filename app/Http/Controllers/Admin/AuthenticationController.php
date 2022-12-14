<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AuthenticationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    private AuthenticationService $_authenticationService;

    public function __construct(AuthenticationService $authenticationService)
    {
        $this->_authenticationService = $authenticationService;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request): JsonResponse
    {
        return $this->_authenticationService->signOut($request);
    }

    public function userInformation(Request $request): JsonResponse
    {
        return $this->_authenticationService->userInformation($request);
    }
}
