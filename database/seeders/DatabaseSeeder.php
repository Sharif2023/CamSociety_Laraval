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
                'is_active' => 1,
            ]
        );

        $photographerAccount = User::updateOrCreate(
            ['email' => 'adnan@photo.com'],
            [
                'name' => 'Photographer',
                'password' => '12345678',
                'role' => 1,
                'is_active' => 1,
            ]
        );

        // Only seed extra dummy data if DB is empty
        if (User::count() <= 3) {
            User::factory()->count(20)->create();
        }

        if (PhotoSell::count() == 0) {
            // Seed photos for our specific photographer
            PhotoSell::factory()->count(10)->create([
                'created_by' => $photographerAccount->id
            ]);
            
            // Seed a few more random photos
            PhotoSell::factory()->count(20)->create();
        }

        if (BookEvent::count() == 0) {
            // Seed events for our specific user
            BookEvent::factory()->count(10)->create([
                'created_by' => $userAccount->id,
                'hiring_status' => 'open'
            ]);

            // Seed a few more random events
            BookEvent::factory()->count(20)->create();
        }
    }
}
