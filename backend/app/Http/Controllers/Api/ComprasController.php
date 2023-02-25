<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Compras;

class ComprasController extends Controller
{
    private $compras;
    public function __construct(Compras $compras){
        $this->store = $compras;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->store->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->store->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Compras $compras)
    {
        return $store;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
