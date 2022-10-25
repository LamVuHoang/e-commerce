<?php

namespace App\Repositories;

use App\Models\Banner;
use App\Http\Resources\BannerResource;

class BannerRepository extends BaseRepository
{
    function __construct()
    {
        $this->query = Banner::query();
    }
    function getBanners()
    {
        $activeBanner = Banner::where('state', true);
        return BannerResource::collection($activeBanner->get());
    }
}
