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
        Schema::create('photographers', function (Blueprint $table) {
            $table->id('photographer_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Links to the users table
            $table->decimal('rating', 3, 2)->default(0.0); // Rating of the photographer
            $table->integer('total_reviews')->default(0); // Total reviews count
            $table->text('specialties')->nullable(); // Specialties (nullable)
            $table->string('portfolio_url')->nullable(); // Portfolio URL (nullable)
            $table->timestamps(); // created_at and updated_at timestamps

            // Foreign key constraint linking to the users table
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photographers');
    }
};
