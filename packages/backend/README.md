# Backend

### Requirements:

- NodeJS (16.x.x)
- NPM (8.x.x)

## How to start the app

1. Create and fill in **.env** file following **.env.example** file
2. Run `npm install` at the root folder
3. Start in DEV env: `npm run start`
4. Build: `npm run build`
5. Start in PROD env:`npm run serve`
6. Generate DB migration: `db:migrate:create -n`
7. Apply DB migration(s): `db:migrate`
8. Apply DB seeds: `db:seed`
9. Reset DB seeds: `db:seed:reset`
