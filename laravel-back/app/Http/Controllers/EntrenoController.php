<?php

namespace App\Http\Controllers;

use App\Http\Resources\EntrenoCollection;
use App\Models\Entreno;
use Illuminate\Http\Request;

class EntrenoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Traer todos los entrenos
        //return  new EntrenoCollection(Entreno::all());
        // Traer los entrenos disponibles
        return new EntrenoCollection(Entreno::where('estado',1)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Entreno  $entreno
     * @return \Illuminate\Http\Response
     */
    public function show(Entreno $entreno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Entreno  $entreno
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Entreno $entreno)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Entreno  $entreno
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entreno $entreno)
    {
        //
    }
}
