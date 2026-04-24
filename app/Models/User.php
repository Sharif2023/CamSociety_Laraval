<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    public const ROLE_CLIENT = 0;
    public const ROLE_PHOTOGRAPHER = 1;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'role',
        'is_active',
        'profile_picture',
        'bio',
        'specializations',
        'rating',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'is_active' => 'boolean',
            'password' => 'hashed',
            'rating' => 'decimal:2',
            'role' => 'integer',
        ];
    }

    public function isClient(): bool
    {
        return $this->role === self::ROLE_CLIENT;
    }

    public function isPhotographer(): bool
    {
        return $this->role === self::ROLE_PHOTOGRAPHER;
    }

    public function roleName(): string
    {
        return $this->isPhotographer() ? 'photographer' : 'user';
    }

    public function dashboardRoute(): string
    {
        return $this->isPhotographer() ? 'photographer.dashboard' : 'dashboard';
    }

    public function photoSells(): HasMany
    {
        return $this->hasMany(PhotoSell::class, 'created_by');
    }

    public function bookEvents(): HasMany
    {
        return $this->hasMany(BookEvent::class, 'created_by');
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'made_by');
    }

    public function blogPosts(): HasMany
    {
        return $this->hasMany(BlogNTip::class);
    }

    public function photographerApplications(): HasMany
    {
        return $this->hasMany(PhotographerApplication::class);
    }
}
