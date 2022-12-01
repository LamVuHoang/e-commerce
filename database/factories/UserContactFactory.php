<?php

namespace Database\Factories;

use App\Models\UserContact;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserContact>
 */
class UserContactFactory extends Factory
{
    protected $model = UserContact::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $gender = ['Male', 'Female'];
        return [
            'phone' => fake()->unique()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'gender' => $gender[random_int(0, 1)],
            'avatar' => 'https://picsum.photos/id/' . rand(1, 100) . '/500/500',
            'address_describe' => fake()->text(500),
            'date_of_birth' => fake()->date('Y-m-d'),
            'ward_id' => random_int(1, 1000),

            // 'account_verified_at' => now(),
        ];
    }
}
