#!/bin/sh

# Run migrations
php artisan migrate --force

# Seed database (Render Free Tier resets SQLite on boot)
php artisan db:seed --force

# Start PHP-FPM in background
php-fpm -D

# Start Nginx in foreground
nginx -g "daemon off;"
