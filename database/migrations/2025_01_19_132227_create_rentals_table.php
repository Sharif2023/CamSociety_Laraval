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
        Schema::create('rentals', function (Blueprint $table) {
            $table->id('rental_id'); // Primary key
            $table->unsignedBigInteger('product_id'); // Links to products table
            $table->unsignedBigInteger('renter_id'); // Links to renters (users table)
            $table->unsignedBigInteger('owner_id'); // Links to owners (users table)
            $table->decimal('daily_rate', 10, 2); // Daily rental rate
            $table->decimal('total_price', 10, 2)->default(0.0); // Total rental price
            $table->date('rental_start_date'); // Start date of rental
            $table->date('rental_end_date'); // End date of rental
            $table->enum('rental_status', ['pending', 'approved', 'in_progress', 'completed', 'cancelled'])->default('pending'); // Rental status
            $table->enum('payment_status', ['pending', 'paid', 'failed'])->default('pending'); // Payment status
            $table->enum('availability_status', ['available', 'rented'])->default('available'); // Availability status
            $table->timestamps(); // created_at and updated_at timestamps

            // Foreign key constraints
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade'); // Fix to match products table's product_id
            $table->foreign('renter_id')->references('id')->on('users')->onDelete('cascade'); // Links to users table for renters
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade'); // Links to users table for owners
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
};
