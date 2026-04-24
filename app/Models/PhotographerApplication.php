<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PhotographerApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'user_id',
    ];

    public function event(): BelongsTo
    {
        return $this->belongsTo(BookEvent::class, 'event_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
