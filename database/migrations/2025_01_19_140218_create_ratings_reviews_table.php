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
        Schema::create('ratings_reviews', function (Blueprint $table) {
            $table->id('review_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Foreign key to users table (who gives the review)
            $table->unsignedBigInteger('target_id'); // The ID of the target (could be product, photographer, event)
            $table->enum('target_type', ['product', 'photographer', 'event']); // Polymorphic target type
            $table->decimal('rating', 2, 1); // Rating value (e.g., 4.5)
            $table->text('review_text')->nullable(); // Text of the review
            $table->timestamps(); // `created_at` and `updated_at` columns

            // Foreign key constraints
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings_reviews');
    }
};
