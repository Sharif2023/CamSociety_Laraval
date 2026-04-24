<?php

namespace Database\Seeders;

use App\Models\PhotoSell;
use App\Models\User;
use App\Models\Admin;
use App\Models\BookEvent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Admin::updateOrCreate(
            ['email' => 'sharif@admin.com'],
            [
                'name' => 'Sharif Admin',
                'password' => Hash::make('sharif123'),
                'email_verified_at' => now(),
                'is_active' => true,
            ]
        );

        User::updateOrCreate(
            ['email' => 'sharif@user.com'],
            [
                'name' => 'Sharif Client',
                'password' => Hash::make('sharif123'),
                'role' => User::ROLE_CLIENT,
                'email_verified_at' => now(),
                'is_active' => true,
            ]
        );

        User::updateOrCreate(
            ['email' => 'sharif@photographer.com'],
            [
                'name' => 'Sharif Photographer',
                'password' => Hash::make('sharif123'),
                'role' => User::ROLE_PHOTOGRAPHER,
                'email_verified_at' => now(),
                'is_active' => true,
            ]
        );

        User::factory()
            ->count(15)
            ->state([
                'role' => User::ROLE_CLIENT,
                'email_verified_at' => now(),
            ])
            ->create();

        User::factory()
            ->count(15)
            ->state([
                'role' => User::ROLE_PHOTOGRAPHER,
                'email_verified_at' => now(),
            ])
            ->create();

        PhotoSell::factory()
            ->count(30)
            ->create();

        BookEvent::factory()
            ->count(50)
            ->create();
    }
}
