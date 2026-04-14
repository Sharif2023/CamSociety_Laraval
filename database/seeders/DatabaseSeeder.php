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
                'password' => '12345678', // 'hashed' cast on User model handles bcrypt
                'role' => 0,
                'is_active' => 1,
            ]
        );

        echo "Seeding Photographer...\n";
        $photographerAccount = User::updateOrCreate(
            ['email' => 'adnan@photo.com'],
            [
                'name' => 'Photographer',
                'password' => '12345678', // 'hashed' cast on User model handles bcrypt
                'role' => 1,
                'is_active' => 1,
            ]
        );

        // Only seed extra dummy data if DB is empty
        if (User::count() <= 3) {
            echo "Seeding 20 extra users...\n";
            User::factory()->count(20)->create();
        }

        echo "Seeding photos...\n";
        $this->call(PhotoSellSeeder::class);

        echo "Seeding events...\n";
        file_put_contents(public_path('seed_status.txt'), "Starting EventUpdateSeeder...\n", FILE_APPEND);
        try {
            $this->call(EventUpdateSeeder::class);
            file_put_contents(public_path('seed_status.txt'), "EventUpdateSeeder finished successfully!\n", FILE_APPEND);
        } catch (\Exception $e) {
            file_put_contents(public_path('seed_status.txt'), "EventUpdateSeeder FAILED: " . $e->getMessage() . "\n", FILE_APPEND);
        }
        echo "Seeding completed successfully!\n";
        file_put_contents(public_path('seed_status.txt'), "Seeding completed successfully!\n", FILE_APPEND);
    }
}
