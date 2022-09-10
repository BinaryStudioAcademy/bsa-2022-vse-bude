import {
  RootScreenName,
  MainScreenName,
  WelcomeRootScreenName,
  DrawerScreenName,
  DeepLinkingPaths,
} from '~/common/enums/enums';

const config = {
  screens: {
    [RootScreenName.MAIN_WITH_MENU]: {
      screens: {
        [DrawerScreenName.MAIN]: {
          screens: {
            [MainScreenName.HOME]: DeepLinkingPaths.HOME,
            [MainScreenName.WELCOME_ROOT]: {
              screens: {
                [WelcomeRootScreenName.SIGN_IN]: DeepLinkingPaths.SIGN_IN,
                [WelcomeRootScreenName.SIGN_UP]: DeepLinkingPaths.SIGN_UP,
              },
            },
          },
        },
      },
    },
    [RootScreenName.ITEM_INFO]: {
      path: DeepLinkingPaths.ITEM,
      parse: {
        itemId: (itemId: string): string => itemId,
      },
    },
  },
};

export { config };
