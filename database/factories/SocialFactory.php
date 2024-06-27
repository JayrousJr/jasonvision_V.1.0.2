<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Social>
 */
class SocialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElements(['Twitter','Whatsapp','Instagram','Youtube','Github','Linkedin','Linkedin','Tiktok','Facebook']),
            
            'icon' => fake()->randomElement(['<BsTwitterX />','<BsWhatsapp />','<BsInstagram />','<BsYoutube />','<BsGithub />','<BsLinkedin />','<BsTiktok />','<BsFacebook />']),
            
            'link'=> fake()->safeEmailDomain()
        ];
    }
}