#!/bin/bash
export DISABLE_ERD=true

npm install
npm run install:shared
npm run build:shared
npm run install:backend
npm run install:frontend
npm run build:backend
npm run build:frontend
cd ./packages/backend
npm run db:migrate
npx pm2 start build/server.js
cd ../frontend
npm run serve
