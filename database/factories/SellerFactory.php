<?php

namespace Database\Factories;

use App\Models\Seller;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seller>
 */
class SellerFactory extends Factory
{
    protected $model = Seller::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'shop_name' => $this->faker->company(),
            'phone' => $this->faker->unique()->phoneNumber(),
            'mail' => $this->faker->unique()->email(),
            'ward_id' => random_int(0, 1000),
            'address_detail' => $this->faker->text(500),
            'create_date' => $this->faker->dateTimeBetween('-50 years', 'now')
                ->format('Y-m-d')
        ];
    }
}
