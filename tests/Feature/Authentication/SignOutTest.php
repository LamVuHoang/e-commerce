<?php

namespace Tests\Feature;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class SignOutTest extends TestCase
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

    public function test_signout_after_signin()
    {
        $user = $this->postJson('api/signin', [
            'username' => 'julia',
            'password' => "12345"
        ]);
        $user->assertStatus(201);
        $token = $user->baseResponse->original["data"]["token"];


        $response = $this->withHeader("Authorization", "Bearer " . $token)
            ->postJson("api/signout");
        $response->assertJson([
            "message" => "Signout Successfully"
        ])->assertOk();
    }

    public function test_signout_without_signin()
    {
        $response = $this->postJson("api/signout");
        $response->assertJson([
            "message" => "Unauthenticated."
        ])->assertStatus(401);
    }

    // public function test_signout_without_token()
    // {
    //     Sanctum::actingAs(
    //         User::factory()->create([
    //             "state" => "Active"
    //         ]),
    //         ['*']
    //     );

    //     $response = $this->postJson("api/signout");
    //     $response->assertJson([
    //         "message" => "Signout Unsuccessfully"
    //     ]);
    // }
}
