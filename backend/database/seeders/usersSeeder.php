<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class usersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email'  => 'admin@example.cv',
            'password' => bcrypt('Password_T3ste'),
            'username' => 'admin',
            'phonenumber' => '9000000',
            'address' => 'Cidade x, Rua y, porta z',
            'type' => 'A'
        ]);
    }
}
