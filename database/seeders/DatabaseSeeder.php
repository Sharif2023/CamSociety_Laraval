<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        echo "Seeding Admin...\n";
        Admin::updateOrCreate(
            ['email' => 'sharif@admin.com'],
            [
                'name' => 'Sharif Admin',
                'email_verified_at' => now(),
                'password' => 'sharif123',
                'is_active' => 1,
            ]
        );

        echo "Seeding Client...\n";
        User::updateOrCreate(
            ['email' => 'sharif@user.com'],
            [
                'name' => 'Sharif Client',
                'email_verified_at' => now(),
                'password' => 'sharif123',
                'role' => User::ROLE_CLIENT,
                'is_active' => 1,
            ]
        );

        echo "Seeding Photographer...\n";
        User::updateOrCreate(
            ['email' => 'sharif@photographer.com'],
            [
                'name' => 'Sharif Photographer',
                'email_verified_at' => now(),
                'password' => 'sharif123',
                'role' => User::ROLE_PHOTOGRAPHER,
                'is_active' => 1,
            ]
        );

        if (User::count() <= 2) {
            echo "Seeding extra client accounts...\n";
            User::factory()->count(10)->create();

            echo "Seeding extra photographer accounts...\n";
            User::factory()->count(10)->photographer()->create();
        }

        echo "Seeding photos...\n";
        $this->call(PhotoSellSeeder::class);

        echo "Seeding events...\n";
        file_put_contents(public_path('seed_status.txt'), "Starting EventUpdateSeeder...\n", FILE_APPEND);
        try {
            $this->call(EventUpdateSeeder::class);
            file_put_contents(public_path('seed_status.txt'), "EventUpdateSeeder finished successfully!\n", FILE_APPEND);
        } catch (\Throwable $exception) {
            file_put_contents(public_path('seed_status.txt'), "EventUpdateSeeder FAILED: " . $exception->getMessage() . "\n", FILE_APPEND);
        }

        echo "Seeding completed successfully!\n";
        file_put_contents(public_path('seed_status.txt'), "Seeding completed successfully!\n", FILE_APPEND);
    }
}
