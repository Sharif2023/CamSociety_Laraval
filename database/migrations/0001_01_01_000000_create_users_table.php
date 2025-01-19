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
        // Users Table
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Name of the user
            $table->string('email')->unique(); // Email (unique)
            $table->string('password'); // Password
            $table->string('phone', 15)->nullable(); // Phone number
            $table->text('bio')->nullable(); // Bio
            $table->string('location')->nullable(); // Location
            $table->enum('profile_type', ['user', 'photographer', 'both'])->default('user'); // Profile type
            $table->decimal('rating', 3, 2)->default(0.0); // Rating (max 5.00)
            $table->integer('total_reviews')->default(0); // Total reviews
            $table->text('specialties')->nullable(); // Specialties (if a photographer)
            $table->string('portfolio_url')->nullable(); // Portfolio URL
            $table->timestamp('email_verified_at')->nullable(); // Email verification
            $table->rememberToken(); // Token for "Remember Me" functionality
            $table->timestamps(); // created_at and updated_at
        });

        // Password Reset Tokens Table
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary(); // Email as primary key
            $table->string('token'); // Reset token
            $table->timestamp('created_at')->nullable(); // Token creation timestamp
        });

        // Sessions Table
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary(); // Session ID
            $table->foreignId('user_id')->nullable()->index(); // Associated user ID
            $table->string('ip_address', 45)->nullable(); // IP address of the session
            $table->text('user_agent')->nullable(); // User agent string
            $table->longText('payload'); // Session data
            $table->integer('last_activity')->index(); // Last activity timestamp
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
