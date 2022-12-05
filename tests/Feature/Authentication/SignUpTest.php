<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\User;

class SignUpTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        User::factory()->create([
            'username' => 'alex',
            'password' => "12345",
            'state' => 'Blocked'
        ]);
        User::factory()->create([
            'username' => 'julia',
            'password' => "12345",
            'state' => 'Active'
        ]);
    }

    /**
     * Signin Module.
     *
     * @return response
     */

    private function signUp($username = "", $password = "", $password_confirmation = "")
    {
        return $this->postJson("api/signup", [
            "username" => $username,
            "password" => $password,
            "password_confirmation" => $password_confirmation
        ]);
    }

    /**
     * Signin Tests.
     *
     * @return void
     */
    public function test_signup_successfully()
    {
        $response = $this->signUp("anonymous", "aBc123", "aBc123");
        $response->assertJsonStructure([
            "token",
            "type"
        ])->assertStatus(201);
    }

    public function test_signup_with_existing_username()
    {
        $response = $this->signUp("alex", "12345", "12345");
        $response->assertJsonFragment([
            "username" => [
                "This Username is already taken"
            ]
        ]);
    }

    public function test_signup_with_empty_field()
    {
        $response = $this->signUp("", "12345", "12345");
        $response->assertJsonFragment([
            "username" => [
                "Username is required"
            ]
        ]);
    }

    public function test_signup_with_unmatched_password_confirmation()
    {
        $response = $this->signUp("anonymous", "1234567", "12345");
        $response->assertJsonFragment([
            "password" => [
                "Password and password confirmation must be matched"
            ]
        ]);
    }

    public function test_signup_with_short_password()
    {
        $response = $this->signUp("anonymous", "1", "1");
        $response->assertJsonFragment([
            "password" => [
                "Password not under 5 characters"
            ]
        ])->assertJsonFragment([
            "password_confirmation" => [
                "Password confirmation not under 5 characters"
            ]
        ]);
    }
}
