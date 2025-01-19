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
        Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id'); // Primary key
            $table->unsignedBigInteger('user_id'); // Foreign key to the users table
            $table->unsignedBigInteger('product_id'); // Foreign key to the products table
            $table->integer('quantity')->default(1); // Quantity of products ordered
            $table->decimal('total_price', 10, 2); // Total price of the order
            $table->timestamp('order_date')->useCurrent(); // Order date (defaults to current timestamp)
            $table->timestamps(); // created_at and updated_at timestamps

            // Foreign key constraints
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
