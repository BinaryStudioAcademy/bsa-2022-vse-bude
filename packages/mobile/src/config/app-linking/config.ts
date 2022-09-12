import { RootScreenName, MainScreenName } from '~/common/enums/enums';

const config = {
  screens: {
    [RootScreenName.MAIN_WITH_MENU]: {
      screens: {
        [RootScreenName.MAIN]: {
          screens: {
            [MainScreenName.HOME]: 'home',
            [MainScreenName.ACCOUNT_ROOT]: {
              screens: {
                [RootScreenName.SIGN_IN]: 'sign-in',
                [RootScreenName.SIGN_UP]: 'sign-up',
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
