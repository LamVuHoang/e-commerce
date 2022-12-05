<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiReponse
{
    public function successResponse($data = [], $statusCode = 200): JsonResponse
    {
        return response()->json($data, $statusCode);
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
