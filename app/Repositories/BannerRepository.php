<?php

namespace App\Repositories;

use App\Models\Banner;

class BannerRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Banner::query();
    }
}
