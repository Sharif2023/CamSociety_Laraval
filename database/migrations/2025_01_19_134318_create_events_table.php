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
        Schema::create('events', function (Blueprint $table) {
            $table->id('event_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Links to the user who created the event
            $table->string('event_name'); // Name of the event
            $table->string('location'); // Location of the event
            $table->date('start_date'); // Start date of the event
            $table->date('end_date'); // End date of the event
            $table->time('start_time'); // Start time of the event
            $table->time('end_time'); // End time of the event
            $table->decimal('rate_per_hour', 10, 2); // Rate per hour for the event
            $table->text('description')->nullable(); // Description of the event
            $table->string('photo_url')->nullable(); // Optional field for event photo
            $table->timestamps(); // created_at and updated_at timestamps

            // Foreign key constraint for user_id referencing users table
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
