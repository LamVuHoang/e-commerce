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
        $rand = random_int(1, 100);
        return [
            'desktop_image' => 'https://picsum.photos/id/' . $rand . '/1600/400',
            'mobile_image' => 'https://picsum.photos/id/' . $rand . '/1600/900',
            'alt' => $this->faker->text(100),
            'link' => '/',
            'state' => $this->faker->randomElement([true, false]),
        ];
    }
}
