# Use the lightweight Alpine version of Nginx
FROM nginx:alpine

# Copy your static files to the default Nginx public folder
COPY src/ /var/www/html

# Nginx Configuration
COPY nginx-site.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Fly.io to route traffic to
EXPOSE 80
