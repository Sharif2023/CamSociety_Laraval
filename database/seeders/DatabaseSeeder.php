<?php

namespace Database\Seeders;

use App\Models\PhotoSell;
use App\Models\User;
use App\Models\Admin;
use App\Models\BookEvent;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        echo "Seeding Admin...\n";
        $admin = Admin::updateOrCreate(
            ['email' => 'adnan@admin.com'],
            [
                'name' => 'Admin',
                'password' => '12345678', // Let the 'hashed' cast in Admin model handle it
                'is_active' => 1,
            ]
        );

        echo "Seeding User...\n";
        $userAccount = User::updateOrCreate(
            ['email' => 'adnan@user.com'],
            [
                'name' => 'User',
                'password' => Hash::make('12345678'),
                'role' => 0,
                'is_active' => 1,
            ]
        );

        echo "Seeding Photographer...\n";
        $photographerAccount = User::updateOrCreate(
            ['email' => 'adnan@photo.com'],
            [
                'name' => 'Photographer',
                'password' => Hash::make('12345678'),
                'role' => 1,
                'is_active' => 1,
            ]
        );

        // Only seed extra dummy data if DB is empty
        if (User::count() <= 3) {
            echo "Seeding 20 extra users...\n";
            User::factory()->count(20)->create();
        }

        if (PhotoSell::count() == 0) {
            echo "Seeding photos...\n";
            // Seed photos for our specific photographer
            PhotoSell::factory()->count(10)->create([
                'created_by' => $photographerAccount->id
            ]);
            
            // Seed a few more random photos
            PhotoSell::factory()->count(20)->create();
        }

        if (BookEvent::count() == 0) {
            echo "Seeding events...\n";
            // Seed events for our specific user
            BookEvent::factory()->count(10)->create([
                'created_by' => $userAccount->id,
                'hiring_status' => 'open'
            ]);

            // Seed a few more random events
            BookEvent::factory()->count(20)->create();
        }
        echo "Seeding completed successfully!\n";
    }
}
