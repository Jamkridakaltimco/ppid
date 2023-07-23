<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'phone' => '080000',
            'password' => bcrypt('password'),
            'level' => 'admin'
        ]);

        \App\Models\User::create([
            'name' => 'operator I',
            'email' => 'operator-satu@example.com',
            'phone' => '080001',
            'password' => bcrypt('password'),
            'level' => 'operator',
            'room_id' => '1'
        ]);

        \App\Models\User::create([
            'name' => 'operator II',
            'email' => 'operator-dua@example.com',
            'phone' => '080002',
            'password' => bcrypt('password'),
            'level' => 'operator',
            'room_id' => '2'
        ]);

        \App\Models\User::create([
            'name' => 'operator III',
            'email' => 'operator-tiga@example.com',
            'phone' => '080003',
            'password' => bcrypt('password'),
            'level' => 'operator',
            'room_id' => '3'
        ]);

        \App\Models\User::create([
            'name' => 'operator IV',
            'email' => 'operator-empat@example.com',
            'phone' => '080004',
            'password' => bcrypt('password'),
            'level' => 'operator',
            'room_id' => '4'
        ]);
    }
}
