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
    libsqlite3-dev \
    gnupg

# Install Node.js (Latest LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

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

# Copy only package files first for better caching
COPY package.json package-lock.json* /var/www/

# Install Node dependencies
RUN npm install

# Copy existing application directory contents
COPY . /var/www

# Run Vite build
RUN npm run build

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

# Expose port 10000
EXPOSE 10000

# Start PHP-FPM in background and Nginx in foreground
CMD php-fpm -D && nginx -g "daemon off;"
