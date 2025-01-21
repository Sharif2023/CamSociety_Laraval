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
        Schema::create('transections', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->decimal('amount', 10, 2);
            $table->string('transaction_id')->unique();
            $table->timestamp('transaction_date')->format('Y-m-d H:i:s');
            $table->foreignId('made_by')->constrained('users')->onDelete('cascade');
            $table->foreignId('cart_id')->constrained('carts')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transections');
    }
};
