<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserContact;
use Illuminate\Database\Seeder;

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
            if ($user->verified === true) {
                UserContact::factory()->count(1)->create([
                    'user_id' => $user->user_id
                ]);
            }
        }
    }
}
