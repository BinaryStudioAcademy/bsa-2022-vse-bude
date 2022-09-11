import { RootScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { DrawerNavigationParamList } from './drawer-navigation-param-list';

type RootNavigationParamList = {
  [RootScreenName.MAIN_WITH_MENU]: NavigatorScreenParams<DrawerNavigationParamList>;
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
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.FORGOT_PASSWORD]: undefined;
  [RootScreenName.MAIN]: undefined;
  [RootScreenName.FAVORITE]: undefined;
  [RootScreenName.MY_LIST]: undefined;
  [RootScreenName.ACCOUNT_ROOT]: undefined;
  [RootScreenName.WELCOME_ROOT]: undefined;
};

export type { RootNavigationParamList };
