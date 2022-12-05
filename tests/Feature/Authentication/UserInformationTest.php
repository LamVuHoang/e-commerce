<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\UserContact;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserInformationTest extends TestCase
{

    public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create([
            'username' => 'julia',
            'password' => "12345",
            'state' => 'Active'
        ]);
        UserContact::factory()->create([
            'user_id' => $user->user_id,
        ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_get_user_information_after_signin()
    {

        $user = $this->postJson('api/signin', [
            'username' => 'julia',
            'password' => "12345"
        ]);
        $user->assertStatus(201);
        // dd($user);
        $token = $user->baseResponse->original["data"]["token"];

        $response = $this->withHeader("Authorization", "Bearer " . $token)
            ->getJson("api/user-information");
        $response->assertJsonStructure([
            "data" => [
                "username",
                "state",
                "user_contact" => [
                    'phone',
                    'email',
                    'first_name',
                    'last_name',
                    'avatar'
                ]
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
            "message" => "Unauthenticated."
        ]);
    }
}
