<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookEvent extends Model
{
    /** @use HasFactory<\Database\Factories\BookEventFactory> */
    use HasFactory;

    protected $fillable = [
        'event_name',
        'address',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'rate',
        'description',
        'photo_url',
        'hiring_status',
        'application_count',
        'created_by',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by'); // Assuming 'created_by' is the column for the event creator
    }
}
