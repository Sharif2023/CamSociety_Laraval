<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransectionFactory> */
    use HasFactory;

    protected $fillable = [
        'email',
        'total_amount',
        'transaction_id',
        'transaction_date',
        'made_by',
        'status',
        'photo_ids',
    ];

    protected $casts = [
        'photo_ids' => 'array', // Automatically handles the JSON array
    ];
}
