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
        Schema::create('messages', function (Blueprint $table) {
            $table->id('message_id'); // Primary key
            $table->unsignedBigInteger('sender_id'); // Foreign key to sender (user or photographer)
            $table->unsignedBigInteger('receiver_id'); // Foreign key to receiver (user or photographer)
            $table->text('message_text'); // The message content
            $table->timestamp('sent_at')->useCurrent(); // Timestamp when the message is sent
            $table->timestamps(); // created_at and updated_at timestamps

            // Foreign key constraints
            $table->foreign('sender_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('receiver_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
