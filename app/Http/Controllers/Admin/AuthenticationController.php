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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request): JsonResponse
    {
        return $this->_authenticationService->logOut($request);
    }

    public function userData(Request $request): JsonResponse
    {
        return $this->_authenticationService->userData($request);
    }
}
