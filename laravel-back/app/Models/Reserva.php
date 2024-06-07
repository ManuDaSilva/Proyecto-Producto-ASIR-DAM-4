<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'entrenos_id',
        'user_id',
        'categoria_entreno',
        'reservas_hechas',
        'estado',
        'fecha_reserva',
    ];
}
