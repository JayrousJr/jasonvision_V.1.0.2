<?php

namespace Database\Factories;

use Hamcrest\Description;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->randomElement(['LED Installations','Smart Vehicle Parking','Software Development']);
        $description= fake()->realText();
        // $image = fake()->imageUrl();
        $slug = Str::slug($name);
        return [
            'name' => $name,
            'slug' => $slug,
            'description' => $description,
            // 'image' => $image,
        ];
    }
}