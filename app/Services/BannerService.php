<?php

namespace App\Services;

use App\Repositories\BannerRepository;
use Illuminate\Http\JsonResponse;

class BannerService extends BaseService
{
    private BannerRepository $_bannerRepository;
    
    public function __construct(BannerRepository $bannerRepository)
    {
        $this->_bannerRepository = $$bannerRepository;
    }

    
}
