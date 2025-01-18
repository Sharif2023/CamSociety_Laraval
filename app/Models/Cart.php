<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cart extends Model
{
    /** @use HasFactory<\Database\Factories\CartFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'item_type',
        'cart_item_id',
        'quantity',
        'price',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function photoSell()
    {
        return $this->belongsTo(PhotoSell::class, 'cart_item_id', 'id');
    }
}
