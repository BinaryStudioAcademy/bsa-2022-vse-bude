import {
  RootScreenName,
  MainScreenName,
  WelcomeRootScreenName,
  LinkingPath,
} from '~/common/enums/enums';

const config = {
  screens: {
    [RootScreenName.MAIN]: {
      screens: {
        [MainScreenName.HOME]: LinkingPath.HOME,
        [MainScreenName.WELCOME_ROOT]: {
          screens: {
            [WelcomeRootScreenName.SIGN_IN]: LinkingPath.SIGN_IN,
            [WelcomeRootScreenName.SIGN_UP]: LinkingPath.SIGN_UP,
          },
        },
      },
    },
    [RootScreenName.ITEM_INFO]: {
      path: LinkingPath.ITEM,
      parse: {
        itemId: (itemId: string): string => itemId,
      },
    },
  },
};

export { config };
