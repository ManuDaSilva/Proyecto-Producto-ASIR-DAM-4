<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReservasCollection;
use App\Models\Reserva;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class ReservaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::table('reservas')->insert([
                'entrenos_id' => $request->entrenos_id,
                'user_id' => $request->user_id,
                'categoria_entreno' => $request->categoria_entreno,
                'reservas_hechas' => $request->reservas_hechas,
                'fecha_reserva' => $request->fecha_reserva,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
    
            return response()->json(['message' => 'Reserva creada con éxito'], 201);
    
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al crear la reserva.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function show(Reserva $reserva)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reserva $reserva)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reserva $reserva)
    {
        //
    }
}
