<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_login_with_valid_credentials()
    {
        User::factory()->create([
            'username' => 'alex',
            'mail' => 'alex@abc.com',
            'phone' => '066767687',
            'password' => "12345",
            'type' => 'Blocked'
        ])->create([
            'username' => 'julia',
            'mail' => 'julia@abc.com',
            'phone' => '033333333',
            'password' => "abcxyz",
            'type' => 'Seller'
        ]);

        $response = $this->get("/api/authentication", [
            "contact" => "julia",
            "password" => "abcxyz"
        ]);

        $response->assertStatus(200);
    }

    public function test_login_with_blocked_account()
    {

        $response = $this->get("/api/authentication", [
            "contact" => "alex",
            "password" => "12345"
        ]);

        $response->assertStatus(400);
    }
}
