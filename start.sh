echo "Starting bootstrap process..."

# Optimize Laravel for Production
echo "Optimizing configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations (Forced for production)
echo "Running migrations..."
php artisan migrate --force

# Seed database (Render Free Tier resets SQLite on boot, so we seed periodically)
# Note: In a persistent DB environment, seeding should be handled carefully.
echo "Seeding database..."
php artisan db:seed --force || true

# Start PHP-FPM in background
echo "Starting PHP-FPM..."
php-fpm -D

# Start Nginx in foreground
echo "Starting Nginx..."
nginx -g "daemon off;"
