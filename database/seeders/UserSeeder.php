<?php

namespace Database\Seeders;

use App\Models\Sellers;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory()->count(50)->create();

        foreach ($users as $user) {
            if ($user->type === 'Seller') {
                Sellers::factory()->count(1)->create([
                    'user_id' => $user->user_id
                ]);
            }
        }
    }
}
