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
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id'); 
            $table->unsignedBigInteger('user_id');
            $table->string('name', 255);
            $table->text('description')->nullable(); 
            $table->decimal('price', 10, 2); 
            $table->enum('category', ['camera', 'accessory']);
            $table->string('image_url', 255)->nullable(); 
            $table->timestamps(); 

            // Foreign key constraint
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
