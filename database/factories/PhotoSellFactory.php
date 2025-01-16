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

        $imageServices = [
            'https://picsum.photos/200/300', // Random image from Picsum
            'https://picsum.photos/seed/photo1/200/300', // Random seed-based image from Picsum
        ];
        
        $categories = [
            "All",
            "Nature",
            "People",
            "Food",
            "Architecture",
            "Travel",
            "Technology",
            "Animals",
            "Fashion",
            "Health",
            "Art",
            "Business",
            "Sports",
            "Science",
            "Education",
            "Music",
            "Transportation",
            "Holidays",
            "Religion",
            "Backgrounds",
            "Textures",
            "Patterns",
            "Colors",
            "Abstract"
        ];
        

        return [
            'created_by' => User::inRandomOrder()->first()->id, // Random user from Users table
            'title' => $this->faker->word(), // Random title
            'description' => $this->faker->sentence(), // Random description
            'price' => $this->faker->randomFloat(2, 10, 500), // Random price between 10 and 500
            'category' => $this->faker->randomElement($categories), // Random category
            'image_url' => $this->faker->randomElement($imageServices),
        ];
    }
}
