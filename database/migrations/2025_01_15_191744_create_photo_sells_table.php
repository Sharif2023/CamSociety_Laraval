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

        $categories = [
            "All",
            "Nature",
            "People",
            "Food",
            "Architecture",
            "Travel",
            "Technology",
            "Animals",
            "Fashion",
            "Health",
            "Art",
            "Business",
            "Sports",
            "Science",
            "Education",
            "Music",
            "Transportation",
            "Holidays",
            "Religion",
            "Backgrounds",
            "Textures",
            "Patterns",
            "Colors",
            "Abstract"
        ];


        Schema::create('photo_sells', function (Blueprint $table) use ($categories) {
            $table->id(); // Primary key
            $table->string('title');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->enum('category', $categories);
            $table->string('image_url')->nullable();
            $table->timestamps(); // Created_at and updated_at columns


            // Foreign key constraint to ensure the user_id exists in the Users table
            // $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
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
