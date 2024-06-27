<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobApplication>
 */
class JobApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'user_id' => fake()->randomElement([1,2,3]),
           'description' => fake()->realText(),
           'attachment' => fake()->imageUrl(),
           'nationality' => fake()->country(),
           'city' => fake()->city(),
        ];
    }
}