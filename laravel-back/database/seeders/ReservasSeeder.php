<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ReservasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservas = [
            [
                'id' => '1',
                'entrenos_id' => '1',
                'user_id' => '1',
                'categoria_entreno' => 'CrossFit Basics',
                'reservas_hechas' => 1,
                'estado' => 1,
                'fecha_reserva' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('reservas')->insert($reservas);
    }
}
