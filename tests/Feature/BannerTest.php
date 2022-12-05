<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BannerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_all_banner()
    {
        $response = $this->getJson("api/banner");
        $response->assertJsonStructure([
            "code",
            "message",
            "data"
        ])->assertSuccessful();
    }
}
