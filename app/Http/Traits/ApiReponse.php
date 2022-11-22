<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiReponse
{
    public function successResponse($data = [], $message = null, $statusCode = 200): JsonResponse
    {
        $apiResponse = [
            'data' => $data,
            'message' => $message,
            'code' => $statusCode
        ];

        return response()->json($apiResponse, $statusCode);
    }
    public function failureResponse($message = null, $statusCode = 400): JsonResponse
    {
        $apiResponse = [
            'message' => $message,
            'code' => $statusCode
        ];

        return response()->json($apiResponse, $statusCode);
    }
}
