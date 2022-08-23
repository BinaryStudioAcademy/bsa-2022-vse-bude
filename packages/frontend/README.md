# Frontend

### Requirements:

- NodeJS (16.x.x)
- NPM (8.x.x)

## How to start the app

1. Create and fill in **.env** file following **.env.example** file
2. Run `npm install` at the root folder
3. Start in DEV env: `npm run start`
4. Build: `npm run build`
5. Start in PROD env:`npm run serve`

## Rules of naming localization files

- File names for localization are given by the name of the page, for example personal-info for '/user-account/dashboard/personal-info'. 
- If the pages are small, you should combine them into one file, for example auth for sign-in, sign-up and auth-verify. 
- If you will use component on several places of app add the localization of the components to the file common.json/components  or to the file with the current page if the component will be used only there. 
- We add localization for public routes to public.json.
- After adding a new file with localization, you need to import it into index.ts for the correct definition of types. 
- Localization files consist of nested objects with keys written in camel case.
