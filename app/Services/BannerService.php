<?php

namespace App\Services;

use App\Http\Resources\BannerResource;
use App\Http\Traits\ApiReponse;
use App\Repositories\BannerRepository;
use Illuminate\Http\JsonResponse;

class BannerService extends BaseService
{
    use ApiReponse;

    private BannerRepository $_bannerRepository;

    public function __construct(BannerRepository $bannerRepository)
    {
        $this->_bannerRepository = $bannerRepository;
    }

    public function getAll(): JsonResponse
    {
        $activeBanners = $this->_bannerRepository->getAll();
        if ($activeBanners) {
            return $this->successResponse(BannerResource::collection($activeBanners));
        }

        return $this->failureResponse("Cannot retrieve Banners", 500);
    }
}
