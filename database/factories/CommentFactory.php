<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Mail\Mailables\Content;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomElement([2,3,4,5,6,7,8]),
            // 'parent_id' => fake()->randomDigitNotZero(),
            'post_id' => fake()->randomDigitNotZero(),
            'content' => fake()->realText(),
            ];
    }
}