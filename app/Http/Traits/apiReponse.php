<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiReponse
{
    public function successResponse($data = [], $message = null, $status = 200): JsonResponse
    {
        $apiResponse = [
            'data' => $data,
            'message' => $message,
            'status' => $status
        ];

        return response()->json($apiResponse, $status);
    }
    public function failureResponse($message = null, $status = 400): JsonResponse
    {
        $apiResponse = [
            'message' => $message,
            'status' => $status
        ];

        return response()->json($apiResponse, $status);
    }
}
