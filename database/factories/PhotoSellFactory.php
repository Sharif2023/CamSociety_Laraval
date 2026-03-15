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
        $categories = [
            "All", "Nature", "People", "Food", "Architecture", "Travel",
            "Technology", "Animals", "Fashion", "Health", "Art", "Business",
            "Sports", "Science", "Education", "Music", "Transportation",
            "Holidays", "Religion", "Backgrounds", "Textures", "Patterns",
            "Colors", "Abstract"
        ];
        $category = $this->faker->randomElement($categories);

        $bdLocations = [
            'Cox\'s Bazar', 'Sundarbans', 'Dhaka City', 'Sylhet Tea Gardens', 'Srimangal',
            'Rangamati', 'Bandarban', 'Sajek Valley', 'Kuakata', 'Saint Martin\'s Island',
            'Lalbagh Fort', 'Ahsan Manzil', 'Somapura Mahavihara', 'Bisanakandi'
        ];

        // Specific titles matching standard photography contexts in Bangladesh
        $titles = [
            'Nature' => ['Sunrise at ' . $this->faker->randomElement($bdLocations), 'Wildlife in ' . $this->faker->randomElement($bdLocations), 'Lush Green ' . $this->faker->randomElement($bdLocations), 'River Life'],
            'Architecture' => ['Historical ' . $this->faker->randomElement(['Lalbagh Fort', 'Ahsan Manzil', 'Panam City', 'Kantajew Temple']), 'Modern Dhaka Skyline', 'Bridge at Night'],
            'People' => ['Street Portrait in Puran Dhaka', 'Local Farmers at Work', 'Daily Life in the Village', 'Festive Moments'],
            'Food' => ['Traditional Bengali Cuisine', 'Street Food Delights', 'Morning Pitha', 'Spices of the Local Market']
        ];

        // Ensure category array exists in titles mapping, or fallback to generic
        $titleOptions = isset($titles[$category]) ? $titles[$category] : [
            $this->faker->word() . ' Masterpiece',
            'Stunning ' . $category . ' Shot',
            'Creative ' . $category . ' Perspective',
            'The Beauty of ' . $category
        ];

        $title = $this->faker->randomElement($titleOptions);

        $descriptions = [
            "High-resolution digital download perfect for commercial use or editorial printing. Captured with professional equipment.",
            "Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.",
            "Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.",
            "A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.",
            "Professional grade photograph with meticulous post-processing to highlight authentic colors."
        ];

        $photoUrl = 'https://loremflickr.com/600/400/' . urlencode(strtolower($category)) . ',bangladesh?lock=' . $this->faker->unique()->numberBetween(1, 10000);

        return [
            'created_by' => User::inRandomOrder()->first()->id, // Random user from Users table
            'title' => $title,
            'description' => $this->faker->randomElement($descriptions),
            'price' => $this->faker->numberBetween(50, 1000) * 100, // Multiples of 100, e.g., 5000 to 100000 BDT
            'category' => $category,
            'image_url' => 'https://loremflickr.com/600/400/' . urlencode(strtolower($category)) . ',bangladesh?lock=' . $this->faker->unique()->numberBetween(1, 10000),
        ];
    }
}
