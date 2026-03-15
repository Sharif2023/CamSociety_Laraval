# Dockerfile for Laravel on Render
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nginx \
    sqlite3 \
    libsqlite3-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd pdo_sqlite

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy only composer files first for better caching
COPY composer.json composer.lock /var/www/

# Install composer dependencies
RUN composer install --no-interaction --no-scripts --no-autoloader --no-dev

# Copy existing application directory contents
COPY . /var/www

# Run composer autoloader and scripts
RUN composer dump-autoload --optimize --no-dev

# Create SQLite database file and set permissions (if not copied from host)
RUN mkdir -p /var/www/database && \
    touch /var/www/database/database.sqlite && \
    chown -R www-data:www-data /var/www/database && \
    chmod -R 775 /var/www/database

# Setup Nginx
COPY ./docker-nginx.conf /etc/nginx/sites-available/default
RUN ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Permissions for storage and cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Expose port 80
EXPOSE 80

# Start Nginx & PHP-FPM
CMD service nginx start && php-fpm
