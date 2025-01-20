<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class OTP extends Model
{

    protected $fillable = [
        'email', 
        'otp',
        'expires_at'
    ];

    public function up()
    {
        Schema::create('otps', function (Blueprint $table) {
            $table->id();
            $table->string('email')->notNullable();
            $table->string('otp');
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }
}
