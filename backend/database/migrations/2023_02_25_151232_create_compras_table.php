<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->integer('produto_id'); //aqui seria:   $table->foreignId('produto_id')->constrained()->cascadeOnDelete();
            $table->integer('user_id'); //aqui seria:   $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->integer('quantidade');
            $table->integer('preco_unitario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
