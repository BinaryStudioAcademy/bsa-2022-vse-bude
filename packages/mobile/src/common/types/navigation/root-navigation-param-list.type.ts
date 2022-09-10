import { RootScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainNavigationParamList } from './main-navigation-param-list';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: NavigatorScreenParams<MainNavigationParamList>;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
  [RootScreenName.TYPE_OF_NEW_POST]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
};

export type { RootNavigationParamList };
