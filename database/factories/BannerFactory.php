<?php

namespace Database\Factories;

use App\Models\Banner;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seller>
 */
class BannerFactory extends Factory
{
    protected $model = Banner::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'desktop_size' => $this->faker->imageUrl(1920, 500),
            'mobile_size' => $this->faker->imageUrl(500, 300),
            'alt' => $this->faker->text(100),
            'link' => $this->faker->url(),
            'state' => $this->faker->randomElement([true, false])         
        ];
    }
}
