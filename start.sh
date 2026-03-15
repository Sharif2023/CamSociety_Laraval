echo "Starting bootstrap process..."

# Run migrations
echo "Running migrations..."
php artisan migrate --force

# Seed database (Render Free Tier resets SQLite on boot)
echo "Seeding database..."
php artisan db:seed --force || true

# Start PHP-FPM in background
echo "Starting PHP-FPM..."
php-fpm -D

# Start Nginx in foreground
echo "Starting Nginx..."
nginx -g "daemon off;"
