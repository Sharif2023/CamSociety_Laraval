<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= 'password',
            'role' => User::ROLE_CLIENT,
            'profile_picture' => 'https://i.pravatar.cc/300?u=' . fake()->unique()->numberBetween(1, 1000),
            'bio' => fake()->sentence(),
            'rating' => fake()->randomFloat(2, 3, 5),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    public function photographer(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => User::ROLE_PHOTOGRAPHER,
        ]);
    }
}
