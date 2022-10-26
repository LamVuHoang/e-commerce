<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\UserSeeder;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        User::factory()->create([
            'username' => 'alex',
            'mail' => 'alex@abc.com',
            'phone' => '066767687',
            'password' => "12345",
            'type' => 'Blocked'
        ]);
        User::factory()->create([
            'username' => 'julia',
            'mail' => 'julia@abc.com',
            'phone' => '03333333333',
            'password' => "12345",
            'type' => 'Admin'
        ]);
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_login_with_valid_credentials()
    {
        $response = $this->logIn("julia", "12345", 200);
        $response->assertOk();
    }

    public function test_login_with_blocked_account()
    {
        $response = $this->logIn("alex", "12345");
        $response->assertJson([
            "message" => "Credentials is invalid"
        ]);
    }

    public function test_sign_up_and_log_in_successfully()
    {
        $response = $this->signUp("sophia", "asdfsa", "asdfsa");
        $response->assertValid(["username", "password", "password_confirmation"]);
    }

    public function test_log_out_successfully()
    {
        Sanctum::actingAs(User::factory()->create([
            "Type" => "User"
        ]), ['*']);
        $response = $this->post("api/logout");
        $response->assertJson([
            'message' => 'Log out Sucessfully'
        ]);
    }

    public function test_log_out_without_token()
    {
        $response = $this->post("api/logout");
        $response->assertGuest();
    }

    private function logIn($contact = null, $password = null)
    {
        $response = $this->postJson("api/login", [
            "contact" => $contact,
            "password" => $password
        ]);
        return $response;
    }

    private function signUp($username = null, $password = null, $passwordConfirmation = null)
    {
        $response = $this->postJson("api/signup", [
            "username" => $username,
            "password" => $password,
            "password_confirmation" => $passwordConfirmation
        ]);
        return $response;
    }

    private function logOut($message = null)
    {
        $response = $this->post("api/logout");
        $response->assertJson([
            'message' => $message
        ]);
    }
}
