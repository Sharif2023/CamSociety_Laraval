<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_name', 'location', 'start_date', 'end_date', 'duration_start', 
        'duration_end', 'rate', 'description', 'photo_url',
    ];
}


