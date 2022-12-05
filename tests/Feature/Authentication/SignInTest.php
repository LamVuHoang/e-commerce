<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class SignInTest extends TestCase
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

    private function signIn($username = "", $password = "")
    {
        return $this->postJson("api/signin", [
            "username" => $username,
            "password" => $password
        ]);
    }

    /**
     * Signin Tests.
     *
     * @return void
     */

    public function test_signin_with_valid_credentials()
    {
        $response = $this->signIn("julia", "12345");
        $response->assertJsonStructure([
            "token",
            "type"
        ])
            ->assertSuccessful();
    }

    public function test_signin_with_blocked_account()
    {
        $response = $this->signIn("alex", "12345");
        $response->assertJsonFragment([
            "username" => [
                "This Username has been blocked"
            ]
        ]);
    }

    public function test_signin_with_not_existing_credentials()
    {
        $response = $this->signIn("anonymous", "134597");
        $response->assertJsonFragment([
            "username" => [
                "This Username does not exists"
            ]
        ]);
    }

    public function test_signin_with_invalid_credentials()
    {
        $response = $this->signIn("julia", "13456789");
        $response->assertJsonFragment([
            "signin" => [
                "Credentials is invalid"
            ]
        ]);
    }

    public function test_signin_with_empty_field()
    {
        $response = $this->signIn("anonymous");
        $response->assertJsonFragment([
            "password" => [
                "Password is required"
            ]
        ]);
    }
}
