#!/bin/bash

# configure nginx
echo "1. Configure nginx"
cp nginx.conf /etc/nginx/nginx.conf
systemctl start nginx
systemctl restart nginx
systemctl status nginx
nginx -t

# copy .env paths
echo "2. Copy .env files"
cp ../env/backend.env ./packages/backend/.env
cp ../env/frontend.env ./packages/frontend/.env

# install and build
echo "3. Install and build"
npm install
npm run install:shared
npm run build:shared
npm run install:backend
npm run install:frontend
npm run build:backend
npm run build:frontend

# apply migrations
echo "4. Apply migrations"
cd ./packages/backend
npm run db:migrate
cd ../..

# start production builds
echo "5. Run production build"
npm run production:start:backend
npm run production:start:frontend
