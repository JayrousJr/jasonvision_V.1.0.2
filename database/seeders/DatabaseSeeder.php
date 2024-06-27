<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Client;
use App\Models\ClientAssignment;
use App\Models\Comment;
use App\Models\Department;
use App\Models\JobApplication;
use App\Models\Message;
use App\Models\Permission;
use App\Models\Role;
use App\Models\Service;
use App\Models\SubService;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Department::factory(4)->create();

        User::factory()->create([
            'name' => 'Jason Vision',
            'email' => 'joshuajayrous@gmail.com',
            'role' => 'Director',
            'phone' => '+255 754 21985',
            'isMember' => '1',
            'profession' => 'User',
            'password' => bcrypt('password')
        ]);
        User::factory(9)->create();
        BlogPost::factory(10)->create();
        Message::factory(20)->create();
        Service::factory(3)->create();
        SubService::factory(10)->create();
        Comment::factory(30)->create();
        Client::factory(10)->create();
        ClientAssignment::factory(10)->create();
        // Message
        Permission::factory()->create(['name' => 'View Message']);
        // Comment
        Permission::factory()->create(['name' => 'View Comment']);
        Permission::factory()->create(['name' => 'Delete Comment']);
        // Blog
        Permission::factory()->create(['name' => 'View Blog']);
        Permission::factory()->create(['name' => 'Delete Blog']);
        Permission::factory()->create(['name' => 'Edit Blog']);
        Permission::factory()->create(['name' => 'Create Blog']);
        // Service
        Permission::factory()->create(['name' => 'Create Service']);
        Permission::factory()->create(['name' => 'View Service']);
        Permission::factory()->create(['name' => 'Edit Service']);
        Permission::factory()->create(['name' => 'Delete Service']);
        // Sub Service
        Permission::factory()->create(['name' => 'Create Sub Service']);
        Permission::factory()->create(['name' => 'View Sub Service']);
        Permission::factory()->create(['name' => 'Edit Sub Service']);
        Permission::factory()->create(['name' => 'Delete Sub Service']);
        // User
        Permission::factory()->create(['name' => 'Create User']);
        Permission::factory()->create(['name' => 'View User']);
        Permission::factory()->create(['name' => 'Edit User']);
        Permission::factory()->create(['name' => 'Delete User']);
        // Permissions
        Permission::factory()->create(['name' => 'View Permission']);
        Permission::factory()->create(['name' => 'View Role']);
        Permission::factory()->create(['name' => 'Create Role']);
        Permission::factory()->create(['name' => 'Edit Role']);
        // Visitor
        Permission::factory()->create(['name' => 'View Visitor']);
        // Client 
        Permission::factory()->create(['name' => 'View Client']);
        Permission::factory()->create(['name' => 'Create Client']);
        Permission::factory()->create(['name' => 'Edit Client']);
        Permission::factory()->create(['name' => 'Delete Client']);
        // Department 
        Permission::factory()->create(['name' => 'View Department']);
        Permission::factory()->create(['name' => 'Create Department']);
        Permission::factory()->create(['name' => 'Edit Department']);
        Permission::factory()->create(['name' => 'Delete Department']);
        // SocialMedia 
        Permission::factory()->create(['name' => 'View Social Media']);
        Permission::factory()->create(['name' => 'Create Social Media']);
        Permission::factory()->create(['name' => 'Edit Social Media']);
        Permission::factory()->create(['name' => 'Delete Social Media']);
        // Client Assignment 
        Permission::factory()->create(['name' => 'View Client Assignment']);
        Permission::factory()->create(['name' => 'Create Client Assignment']);
        Permission::factory()->create(['name' => 'Edit Client Assignment']);
        Permission::factory()->create(['name' => 'Delete Client Assignment']);
        // Roles
        Role::factory()->create(['name' => 'Director']);
        Role::factory()->create(['name' => 'CTO']);
        Role::factory()->create(['name' => 'Marketing Officer']);
        Role::factory()->create(['name' => 'Finance Officer']);
    }
}