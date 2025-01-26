<?php

namespace Database\Seeders;

use App\Models\PhotoSell;
use App\Models\User;
use App\Models\Admin;
use App\Models\BookEvent;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Admin::factory()->create(
            [
            'name' => 'Admin',
            'email' => 'adnan@admin.com',
            'password' => bcrypt('12345678'),
            'is_active' => 1,
            ]
    );

        User::factory()->create([
            'name' => 'User',
            'email' => 'adnan@user.com',
            'password' => bcrypt('12345678'),
            'role' => 0,
        ]);

        User::factory()->create([
            'name' => 'Photographer',
            'email' => 'adnan@photo.com',
            'password' => bcrypt('12345678'),
            'role' => 1,
        ]);


        User::factory()
            ->count(50)
            ->create();

        PhotoSell::factory()
            ->count(30)
            ->create();

        BookEvent::factory()
            ->count(50)
            ->create();
    }
}
