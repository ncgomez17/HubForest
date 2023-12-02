# Dockerfile.php

# Use the official PHP with Apache image
FROM php:8.0-apache

# Install MySQLi extension
RUN docker-php-ext-install mysqli

# Enable mod_rewrite
RUN a2enmod rewrite

# Copy the contents of the local ./REST directory to /var/www/html in the container
COPY ./REST /var/www/html

# Set appropriate ownership
RUN chown -R www-data:www-data /var/www/html

# Set more restrictive permissions
RUN find /var/www/html -type f -exec chmod 644 {} \;
RUN find /var/www/html -type d -exec chmod 755 {} \;

# Restart Apache
RUN service apache2 restart
