<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $state = ['Blocked', 'Active'];
        $verified = [true, false];
        return [
            'username' => fake()->unique()->userName(),
            'password' => 12345,
            'state' => $state[random_int(0, 1)],
            'verified' => $verified[random_int(0, 1)],
        ];
    }
}
