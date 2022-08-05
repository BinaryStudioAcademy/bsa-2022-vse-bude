# Vse Bude 🇺🇦

As an online auction platform, “Vse-bude” provides a simple and secure environment for anyone who wants to both support Ukraine and sell an item which they no longer find a need in and hand it over to new potential owners via the auction bidding system. The funds that will be raised during those auctions will be donated to one of Ukraine's accredited charity organisations/funds and the item will be delivered to its new owner.

# Packages 📦

- [Backend](./packages/backend)
- [Frontend](./packages/frontend)
- [Mobile](./packages/mobile)
- [Shared](./packages/shared)

# Requirements:

- NodeJS (16.x.x)
- NPM (8.x.x)

# Before start

### Backend 💾

- Create DB using PostgreSQL
- Fill `.env` in `packages/backend` folder
- Run `cd packages/backend && npm run db:generate && npm run db:migrate && npm run db:seed`

### Frontend 🖥

- Fill `.env` in `packages/frontend` folder

### Mobile 📱

- Fill `.env` in `packages/mobile` folder

# How to start

- `npm run install:all` at the root
- Start backend `cd packages/backend && npm run start`
- Start frontend `cd packages/frontend && npm run start`
- Start mobile `cd packages/mobile && npm run start` and `npm run android` or `npm run ios` in a new terminal

There are also other npm scripts, they are used for code style checks and linting

# DB Schema

![DB Schema](./packages/backend/prisma/ERD.svg)

# Technologies 🛠

### Backend

- [Prisma](https://www.prisma.io/) - an ORM
- [Express](https://expressjs.com/) - a node.js framework
- [PostgreSql](https://www.postgresql.org/) - for DB

### Frontend

- [Next](https://nextjs.org/) - React framework
- [NextUI](https://nextui.org/) - React UI library
- [Redux](https://redux.js.org/) - state container for JS apps
- [Redux/Toolkit](https://redux-toolkit.js.org/) - toolset for efficient Redux development

### Mobile

- [React-Native](https://reactnative.dev/) - UI software framework
- [Redux](https://redux.js.org/) - state container for JS apps
- [Redux/Toolkit](https://redux-toolkit.js.org/) - toolset for efficient Redux development

### Shared

- [Joi](https://github.com/sideway/joi) - schema description language and data validator for JS

# Git flow
