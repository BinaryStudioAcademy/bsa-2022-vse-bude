import { RootScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainNavigationParamList } from './main-navigation-param-list';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: NavigatorScreenParams<MainNavigationParamList>;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.VERIFY_PHONE]: undefined;
  [RootScreenName.VERIFY_CODE]: undefined;
  [RootScreenName.VERIFIED]: undefined;
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
  [RootScreenName.NEW_AUCTION]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
  [RootScreenName.TYPE_OF_NEW_POST]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
  [RootScreenName.MAIN_WITH_MENU]: undefined;
};

export type { RootNavigationParamList };
