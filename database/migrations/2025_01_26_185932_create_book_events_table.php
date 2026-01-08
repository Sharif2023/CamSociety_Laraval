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
        Schema::create('book_events', function (Blueprint $table) {
            $table->id();
            $table->string('event_name');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->string('address');
            $table->date('start_date');
            $table->date('end_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->decimal('rate', 8, 2);
            $table->text('description');
            $table->string('photo_url')->nullable();
            $table->enum('hiring_status', ['open', 'closed'])->default('open');
            // application count, changed to unsigned integer
            $table->unsignedTinyInteger('application_count')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_events');
    }
};
