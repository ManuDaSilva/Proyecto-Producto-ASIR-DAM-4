<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class EntrenoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $entrenos = [
            [
                'nombre' => 'CrossFit Basics',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Basics',
                'horario' => '2024-06-10 09:00:00',
                'descripcion' => 'Entrenamiento básico de CrossFit para principiantes.',
                'maxslots' => 20,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Advanced',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Advanced',
                'horario' => '2024-06-11 18:00:00',
                'descripcion' => 'Entrenamiento avanzado de CrossFit para atletas experimentados.',
                'maxslots' => 15,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Endurance',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Endurance',
                'horario' => '2024-06-12 07:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la resistencia.',
                'maxslots' => 25,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Strength',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Strength',
                'horario' => '2024-06-13 17:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la fuerza.',
                'maxslots' => 20,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Flexibility',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Flexibility',
                'horario' => '2024-06-14 08:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la flexibilidad.',
                'maxslots' => 20,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Cardio',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Cardio',
                'horario' => '2024-06-15 06:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en el cardio.',
                'maxslots' => 30,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Power',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Power',
                'horario' => '2024-06-16 19:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la potencia.',
                'maxslots' => 15,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Mobility',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Mobility',
                'horario' => '2024-06-17 10:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la movilidad.',
                'maxslots' => 20,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Speed',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Speed',
                'horario' => '2024-06-18 16:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en la velocidad.',
                'maxslots' => 20,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'CrossFit Balance',
                'imagen' => 'https://via.placeholder.com/640x480.png?text=CrossFit+Balance',
                'horario' => '2024-06-19 11:00:00',
                'descripcion' => 'Entrenamiento de CrossFit enfocado en el equilibrio.',
                'maxslots' => 25,
                'estado' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('entrenos')->insert($entrenos);
    }
}
