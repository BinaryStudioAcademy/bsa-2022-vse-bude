import {
  RootScreenName,
  MainScreenName,
  WelcomeRootScreenName,
  DrawerScreenName,
} from '~/common/enums/enums';

const config = {
  screens: {
    [RootScreenName.MAIN_WITH_MENU]: {
      screens: {
        [DrawerScreenName.MAIN]: {
          screens: {
            [MainScreenName.HOME]: 'home',
            [MainScreenName.WELCOME_ROOT]: {
              screens: {
                [WelcomeRootScreenName.SIGN_IN]: 'sign-in',
                [WelcomeRootScreenName.SIGN_UP]: 'sign-up',
              },
            },
          },
        },
      },
    },
    [RootScreenName.ITEM_INFO]: {
      path: 'items/:itemId?',
      parse: {
        itemId: (itemId: string) => itemId,
      },
    },
  },
};

export { config };
