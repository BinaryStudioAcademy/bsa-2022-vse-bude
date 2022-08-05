#!/bin/bash

# configure nginx
cp nginx.conf /etc/nginx/nginx.conf
sudo systemctl start nginx
sudo systemctl restart nginx
sudo systemctl status nginx
sudo nginx -t

# copy .env paths
cp ../env/backend.env ./packages/backend/.env
cp ../env/frontend.env ./packages/frontend/.env

# install and build
npm install
npm run install:shared
npm run build:shared
npm run install:backend
npm run install:frontend
npm run build:backend
npm run build:frontend

# apply migrations
cd ./packages/backend
npm run db:migrate
cd ../..

# start production builds
npm run production:start:backend
npm run production:start:frontend
