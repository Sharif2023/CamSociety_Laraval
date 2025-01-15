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
        Schema::create('photo_sells', function (Blueprint $table) {
            $table->id('photo_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Foreign key to Users table
            $table->string('title'); // Title of the photo
            $table->text('description')->nullable(); // Optional description
            $table->decimal('price', 10, 2); // Price of the photo
            $table->string('image_url')->nullable(); // Image URL
            $table->timestamps(); // Created_at and updated_at columns


            // Foreign key constraint to ensure the user_id exists in the Users table
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photo_sells');
    }
};
