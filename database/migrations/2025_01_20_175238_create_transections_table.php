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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->decimal('total_amount', 10, 2);
            $table->string('transaction_id')->unique();
            $table->timestamp('transaction_date')->format('Y-m-d H:i:s');
            $table->foreignId('made_by')->constrained('users')->onDelete('cascade');
            $table->string('status')->default('pending');
            $table->json('photo_ids'); // Add a JSON column to store photo IDs
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
