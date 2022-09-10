import { RootScreenName, MainScreenName } from '~/common/enums/enums';
import { LinkingOptions } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';

const linking: LinkingOptions<RootNavigationParamList> = {
  prefixes: [
    'vsebude://',
    'https://vse-bude.com.ua/',
    'http://vse-bude.com.ua/',
  ],
  config: {
    screens: {
      [RootScreenName.MAIN]: {
        screens: {
          [MainScreenName.HOME]: '*',
          [MainScreenName.FAVORITE]: 'favorite',
        },
      },
      [RootScreenName.ITEM_INFO]: {
        path: 'items/:itemId?',
        parse: {
          itemId: (itemId: string): string => itemId,
        },
      },
    },
  },
};

export { linking };
