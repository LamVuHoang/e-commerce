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
        $rand = rand(1, 100);
        return [
            'desktop_size' => 'https://picsum.photos/id/'.$rand.'/1920/350',
            'mobile_size' => 'https://picsum.photos/id/'.$rand.'/500/250',
            'alt' => $this->faker->text(100),
            'link' => 'http://localhost:8000/',
            'state' => $this->faker->randomElement([true, false])         
        ];
    }
}
