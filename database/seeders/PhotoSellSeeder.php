<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhotoSellSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $photographer = \App\Models\User::where('role', 1)->first() ?? \App\Models\User::factory()->create(['role' => 1]);

        $photos = [
            [
                'title' => 'Golden Hour in Dhaka',
                'description' => 'A stunning capture of the sunset over the Dhaka skyline, highlighting the vibrant city life.',
                'image_url' => 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Architecture',
                'price' => 250000,
            ],
            [
                'title' => 'Sundarbans Wilderness',
                'description' => 'A rare glimpse of the misty mangroves in the Sundarbans, home to the Royal Bengal Tiger.',
                'image_url' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop',
                'category' => 'Nature',
                'price' => 450000,
            ],
            [
                'title' => 'Traditional Boat Life',
                'description' => 'Daily life on the rivers of Bangladesh, capturing the serene movement of traditional boats.',
                'image_url' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Travel',
                'price' => 150000,
            ],
            [
                'title' => 'Srimangal Tea Gardens',
                'description' => 'The rolling green hills of the tea gardens in Srimangal during the early morning fog.',
                'image_url' => 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Nature',
                'price' => 300000,
            ],
            [
                'title' => 'Ahsan Manzil Detail',
                'description' => 'Close-up architectural detail of the Pink Palace, showcasing heritage craftmanship.',
                'image_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Architecture',
                'price' => 200000,
            ],
            [
                'title' => 'Street Portrait',
                'description' => 'A soulful portrait capturing the character and stories of the people in Old Dhaka.',
                'image_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
                'category' => 'People',
                'price' => 120000,
            ],
            [
                'title' => 'Market Spices',
                'description' => 'The vibrant and colorful spice stalls of a local market in Bangladesh.',
                'image_url' => 'https://images.unsplash.com/photo-1506368249639-73a05d6f6424?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Food',
                'price' => 80000,
            ],
            [
                'title' => 'Cox\'s Bazar Waves',
                'description' => 'Long exposure shot of the waves crashing on the world\'s longest natural sea beach.',
                'image_url' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
                'category' => 'Nature',
                'price' => 350000,
            ],
            [
                'title' => 'Modern Dhaka Night',
                'description' => 'The neon lights and dynamic movement of the modern financial district at night.',
                'image_url' => 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Architecture',
                'price' => 280000,
            ],
            [
                'title' => 'Rainy Day Village',
                'description' => 'The peaceful ambiance of a Bangladeshi village during the monsoon rains.',
                'image_url' => 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop',
                'category' => 'Nature',
                'price' => 180000,
            ],
        ];

        foreach ($photos as $photo) {
            \App\Models\PhotoSell::create(array_merge($photo, [
                'created_by' => $photographer->id,
            ]));
        }

        // Seed some extra random photos to fill up the grid
        \App\Models\PhotoSell::factory()->count(10)->create([
            'created_by' => $photographer->id,
        ]);
    }
}
