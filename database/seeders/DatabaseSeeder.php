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

        $admin = Admin::updateOrCreate(
            ['email' => 'adnan@admin.com'],
            [
                'name' => 'Admin',
                'password' => '12345678',
                'is_active' => 1,
            ]
        );

        $userAccount = User::updateOrCreate(
            ['email' => 'adnan@user.com'],
            [
                'name' => 'User',
                'password' => '12345678',
                'role' => 0,
            ]
        );

        $photographerAccount = User::updateOrCreate(
            ['email' => 'adnan@photo.com'],
            [
                'name' => 'Photographer',
                'password' => '12345678',
                'role' => 1,
            ]
        );

        // Explicitly create some data for our specific photographer
        PhotoSell::factory()->count(5)->create([
            'created_by' => $photographerAccount->id
        ]);

        BookEvent::factory()->count(5)->create([
            'created_by' => $userAccount->id,
            'hiring_status' => 'open'
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
