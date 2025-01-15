<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhotoSell>
 */
class PhotoSellFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->user_id, // Random user from Users table
            'title' => $this->faker->word(), // Random title
            'description' => $this->faker->sentence(), // Random description
            'price' => $this->faker->randomFloat(2, 10, 500), // Random price between 10 and 500
            'image_url' => $this->faker->imageUrl(640, 480, 'nature', true, 'photo'), // Random image URL
        ];
    }
}
