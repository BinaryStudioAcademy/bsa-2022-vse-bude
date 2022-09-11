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

**Note**: If you are using Windows, do these two additional steps **before** cloning the repo:

- Change `eol` setting in your code editor to `lf`.
- Change the `autocrlf` setting to `input` in the Git settings:

```
git config --global core.autocrlf input
```

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
- Start mobile `cd packages/mobile && npm run start` or `npm run android` or `npm run ios` in a new terminal

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
- [Emotion](https://emotion.sh/docs/introduction) - styling
- [Redux](https://redux.js.org/) - state container for JS apps
- [Redux/Toolkit](https://redux-toolkit.js.org/) - toolset for efficient Redux development

### Mobile

- [React-Native](https://reactnative.dev/) - UI software framework
- [Redux](https://redux.js.org/) - state container for JS apps
- [Redux/Toolkit](https://redux-toolkit.js.org/) - toolset for efficient Redux development

### Shared

- [Joi](https://github.com/sideway/joi) - schema description language and data validator for JS

## Code quality

We have certain [quality criteria](https://github.com/BinaryStudioAcademy/quality-criteria/blob/production/source/javascript.md), which we should follow during application development.

# Git flow

### Commits

Commit message **must** have next structure:

```
<project-prefix>-<task #>: <description>
```

- `task #` - Trello task number
- `description` - a short summary of code changes

Examples:

- `VB-15: add private routes`
- `VB-9: change button-styles`
- `VB-32: fix user profile avatar`

### Branches

In this project we follow with [Pull Request process](https://help.github.com/en/articles/about-pull-requests). Two main branches (`main` and `release`) are protected with [Github branch protection rules](https://help.github.com/en/articles/defining-the-mergeability-of-pull-requests):

- Require pull request with 1 review from code owner before merging
- Require all ci checks

Normal flow is to create a new branch for each task or group of linked tasks. Name of branch **must** have next structure:

```
<prefix>/<description>
```

- `prefix` - allowed prefixes: `feature`, `fix`.
- `description` - a short summary of the task

Examples:

- `feature/add-private-routes`
- `fix/adjust-button-styles`

After task is completed ― create PR of your branch into `main` and assign other developers to review.

# Team rules 🧐

- [Rules](https://docs.google.com/document/d/17qtB4Dyh03I9VmBRIzGNk4M2feKaiAyGf4cvgUGBbSI/edit)
