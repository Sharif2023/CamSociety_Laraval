<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookEvent>
 */
class BookEventFactory extends Factory
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
            'https://picsum.photos/200/300?grayscale', // Random image from Picsum in grayscale
            'https://picsum.photos/200/300?blur', // Random image from Picsum with blur
            'https://picsum.photos/200/300?random', // Random image from Picsum with random effect
            'https://picsum.photos/200/300?random=1', // Random image from Picsum with random effect
            'https://picsum.photos/200/300?random=2', // Random image from Picsum with random effect
        ];



        return [
            'created_by' => User::inRandomOrder()->first()->id, // Random user from Users table
            'event_name' => $this->faker->sentence(),
            'address' => $this->faker->address(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'start_time' => $this->faker->time(),
            'end_time' => $this->faker->time(),
            'rate' => $this->faker->randomFloat(2, 1000, 10000), // Random rate between 1000 and 10000
            'description' => $this->faker->paragraph(),
            'photo_url' => $this->faker->randomElement($imageServices),
            'hiring_status' => $this->faker->randomElement(['open', 'closed'])->default('open'), // Random hiring status
            'application_count' => $this->faker->numberBetween(0, 10), // Random application count
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
