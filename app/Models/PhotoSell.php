<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoSell extends Model
{
    /** @use HasFactory<\Database\Factories\PhotoSellFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'category',
        'image_url',
        'created_by',
    ];

    function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }
}
