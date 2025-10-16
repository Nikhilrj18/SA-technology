# Deployment Guide for Pravaah Labs Website

This guide will help you deploy your Pravaah Labs website to your own server.

## Prerequisites

- Node.js (v18 or higher) and npm installed
- A web server (Apache, Nginx, or similar)
- SSH access to your server
- A domain name pointed to your server

## Building for Production

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```
   
   This will create a `dist` folder containing all the production-ready files.

## Deployment Options

### Option 1: Deploy to Static Hosting (Recommended)

#### Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

#### Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy to Your Own Server

#### Using Apache

1. **Upload the dist folder to your server**
   ```bash
   scp -r dist/* user@your-server:/var/www/html/
   ```

2. **Configure Apache** (create or edit `.htaccess` in your web root):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

3. **Ensure Apache modules are enabled**:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

#### Using Nginx

1. **Upload the dist folder**
   ```bash
   scp -r dist/* user@your-server:/var/www/html/
   ```

2. **Configure Nginx** (edit `/etc/nginx/sites-available/default` or your site config):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Test and reload Nginx**:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Option 3: Using Docker

1. **Create a Dockerfile** (already included in project root if not present):
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf**:
   ```nginx
   server {
       listen 80;
       location / {
           root /usr/share/nginx/html;
           index index.html index.htm;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Build and run**:
   ```bash
   docker build -t pravaahlabs-website .
   docker run -d -p 80:80 pravaahlabs-website
   ```

## SSL/HTTPS Setup (Recommended)

### Using Let's Encrypt (Free)

1. **Install Certbot**:
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. **Get SSL certificate**:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

3. **Auto-renewal** (Certbot usually sets this up automatically):
   ```bash
   sudo certbot renew --dry-run
   ```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check that all images are loading
- [ ] Verify navigation works on all pages
- [ ] Test mobile responsiveness
- [ ] Ensure SSL certificate is working (if applicable)
- [ ] Test Privacy Policy page
- [ ] Verify SEO meta tags are present
- [ ] Check Google Search Console for any errors
- [ ] Set up analytics (Google Analytics, etc.)

## Environment Variables

If you need to add environment variables (for future backend integration):

1. Create a `.env` file in the project root
2. Add your variables:
   ```
   VITE_API_URL=https://api.yourdomain.com
   VITE_CONTACT_EMAIL=info@pravaahlabs.com
   ```

3. Rebuild the project after adding environment variables

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure you have configured URL rewriting (see Apache/Nginx configs above)

### Images Not Loading
- Check that all image paths are correct
- Ensure images are in the `dist` folder after build

### Contact Form Not Working
- The current implementation is client-side only
- You'll need to integrate with a backend service or email API (e.g., SendGrid, EmailJS)

## Support

For technical support with deployment, contact:
- Email: info@pravaahlabs.com
- Phone: +91 96 1515 3615

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
