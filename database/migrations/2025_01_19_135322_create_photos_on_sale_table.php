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
        Schema::create('photos_on_sale', function (Blueprint $table) {
            $table->id('photo_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Foreign key to the users table (photographer)
            $table->string('title'); // Title of the photo
            $table->text('description')->nullable(); // Description of the photo
            $table->decimal('price', 10, 2); // Price of the photo
            $table->string('image_url')->nullable(); // URL to the image
            $table->timestamps(); // Automatically creates `created_at` and `updated_at` columns

            // Foreign key constraint to the users table
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photos_on_sale');
    }
};
