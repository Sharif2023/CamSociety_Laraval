<?php

namespace Database\Seeders;

use App\Models\BookEvent;
use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventUpdateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate existing events
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        BookEvent::truncate();
        Event::truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $user = User::first();
        if (!$user) {
            $user = User::create([
                'name' => 'Default User',
                'email' => 'user@example.com',
                'password' => bcrypt('password'),
            ]);
        }

        $eventTypes = [
            'Wedding Photography', 'Gaye Holud Shoot', 'Bou Bhat Ceremony',
            'Birthday Party Coverage', 'Corporate Event Photography',
            'Product Photography for E-commerce', 'Pre-Wedding Outdoor Shoot',
            'Maternity Photoshoot'
        ];

        $locations = [
            'Dhanmondi, Dhaka', 'Gulshan, Dhaka', 'Banani, Dhaka', 'Uttara, Dhaka', 'Mirpur, Dhaka',
            'Puran Dhaka', 'Baily Road, Dhaka', 'Mohammadpur, Dhaka'
        ];

        for ($i = 1; $i <= 8; $i++) {
            BookEvent::create([
                'event_name' => $eventTypes[$i-1],
                'address' => $locations[$i-1],
                'start_date' => now()->addDays($i)->format('Y-m-d'),
                'end_date' => now()->addDays($i + 1)->format('Y-m-d'),
                'start_time' => '10:00',
                'end_time' => '18:00',
                'rate' => 500000, // 5000 * 100
                'description' => 'A professional photography event for ' . $eventTypes[$i-1],
                'photo_url' => 'events/event' . $i . '.png',
                'hiring_status' => 'open',
                'application_count' => 0,
                'created_by' => $user->id,
            ]);

            // Also seed the Event model just in case it's used elsewhere
            Event::create([
                'event_name' => $eventTypes[$i-1],
                'location' => $locations[$i-1],
                'start_date' => now()->addDays($i)->format('Y-m-d'),
                'end_date' => now()->addDays($i + 1)->format('Y-m-d'),
                'start_time' => '10:00',
                'end_time' => '18:00',
                'rate' => 5000.00,
                'description' => 'A professional photography event for ' . $eventTypes[$i-1],
                'photo_url' => 'photos/Events/event' . $i . '.png',
            ]);
        }

        $this->command->info('Events refreshed successfully with new images.');
    }
}
