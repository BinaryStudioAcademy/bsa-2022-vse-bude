# Mobile

### Requirements:

- NodeJS (16.x.x)
- NPM (8.x.x)

**Note**: If you are using Windows, do these two additional steps **before** cloning the repo:
  * Change ```eol``` setting in your code editor to ```lf```.
  * Change the ```autocrlf``` setting to ```input``` in the Git settings:
    ```
    git config --global core.autocrlf input
    ```

## Code quality

We have certain [quality criteria](https://github.com/BinaryStudioAcademy/quality-criteria/blob/production/source/javascript.md), which we should follow during application development.

## Development

This project is mainly focused on the Android platform. Pay attention that if we add any library, we **MUST** configure it for both IOS and Android platforms.

In case you install new library don't forget to run `npx pod-install`

## Commits

Commit message **must** have next structure:

```
<project-prefix>-<task #>: <description>
```

- `task #` - Trello task number
- `description` - a short summary of code changes

Examples:

- `<project-prefix>-15: add private routes`
- `<project-prefix>-9: change button-styles`
- `<project-prefix>-32: fix user profile avatar`

## Branches

In this project we follow with [Pull Request process](https://help.github.com/en/articles/about-pull-requests). Two main branches (`main` and `develop`) are protected with [Github branch protection rules](https://help.github.com/en/articles/defining-the-mergeability-of-pull-requests):

- Require pull request with 2 reviews and at least one from code owner before merging

Normal flow is to create a new branch for each task or group of linked tasks. Name of branch **must** have next structure:

```
<prefix>/<project-prefix>-<task #>-<description>
```

- `prefix` - allowed prefixes: `new`, `patch`, `fix`.
- `task #` - Trello task number
- `description` - a short summary of the task

Examples:

- `new/<project-prefix>-15-private-routes`
- `patch/<project-prefix>-9-button-styles`
- `fix/<project-prefix>-32-user-profile-avatar`

After task is completed ― create PR of your branch into `development` and assign other developers to review.

## How to start the app

1. Create and fill in **.env** file following **.env.example** file
2. Run `npm install` at the root folder
3. Start Metro: `npm run start`
4. Start the app:`npm run android` in a new terminal
