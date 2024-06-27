<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClientAssignment>
 */
class ClientAssignmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "service_id" => fake()->randomElement([1, 2, 3]),
            "client_id" => fake()->randomElement([1, 2, 3, 5, 9]),
            "maintenance" => fake()->randomElement([0, 1]),
            "addition_service" => fake()->randomElement([0, 1]),
            "new_service" => fake()->randomElement([0, 1]),
            "description" => fake()->text(),
        ];
    }
}