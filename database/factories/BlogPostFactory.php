<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(3);
        $location = fake()->city();
        $content = fake()->realTextBetween(160, 300, 1);
        // $image = fake()->imageUrl();
        $instagram = 'https://fakelink.com';
        $youtube = 'https://fakelink.com';
        $facebook = 'https://fakelink.com';
        $twitter = 'https://fakelink.com';
        $slug = Str::slug($title);
        return [
            'title' => $title,
            'location' => $location,
            'content' => $content,
            // 'image' => $image,
            'instagram' => $instagram,
            'youtube' => $youtube,
            'facebook' => $facebook,
            'twitter' => $twitter,
            'slug' => $slug,

        ];
    }
}