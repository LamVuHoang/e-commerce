<?php

namespace Tests\Feature;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserInformationTest extends TestCase
{

    public function setUp(): void
    {
        parent::setUp();
        User::factory()->create([
            'username' => 'julia',
            'password' => "12345",
            'state' => 'Active'
        ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_get_user_information_after_signin()
    {
        Sanctum::actingAs(
            User::factory()->create([
                "state" => "Active"
            ]),
            ['*']
        );

        $response = $this->getJson("api/user-information");
        $response->assertJsonStructure([
            "data" => [
                "username",
                "state",
                "user_contact"
            ],
            "code",
            "message"
        ])->assertOk();
    }

    public function test_get_user_information_without_token()
    {
        $response = $this->withHeader("Authorization", "Bearer ")
            ->getJson("api/user-information");
        $response->assertJson([
            "message" => "Error finding User"
        ]);
    }
}
