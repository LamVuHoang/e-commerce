<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $lastName = fake()->lastName();
        $firstName = fake()->firstName();
        $userType = ['Blocked', 'User', 'Seller', 'Admin'];

        return [
            'password' => 12345,
            'type' => $userType[random_int(0, 3)],
            'remember_token' => Str::random(10),
            'first_name' => $firstName,
            'last_name' => $lastName,
            'username' => $firstName . $lastName,
            'date_of_birth' => fake()->date('Y-m-d'),
            'phone' => fake()->unique()->phoneNumber(),
            'mail' => fake()->unique()->safeEmail(),
            'ward_id' => random_int(1, 1000),
            'address_detail' => fake()->text(500),
            'account_verified_at' => now(),
        ];
    }
}
