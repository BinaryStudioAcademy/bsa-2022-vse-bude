import { NavigatorScreenParams } from '@react-navigation/native';
import { RootScreenName } from '~/common/enums/enums';
import { DrawerNavigationParamList } from './drawer-navigation-param-list';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: { screen: string } | undefined;
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.VERIFY_PHONE]: { fromSignUp: boolean } | undefined;
  [RootScreenName.VERIFY_EMAIL]: { fromSignUp: boolean } | undefined;
  [RootScreenName.VERIFY_CODE_PHONE]: { fromSignUp: boolean } | undefined;
  [RootScreenName.VERIFIED_PHONE]: { fromSignUp: boolean } | undefined;
  [RootScreenName.VERIFY_CODE_EMAIL]: { fromSignUp: boolean } | undefined;
  [RootScreenName.VERIFIED_EMAIL]: { fromSignUp: boolean } | undefined;
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.WELCOME]: undefined;
  [RootScreenName.FORGOT_PASSWORD]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
  [RootScreenName.NEW_AUCTION]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
  [RootScreenName.TYPE_OF_NEW_POST]: undefined;
  [RootScreenName.FILTER]: undefined;
  [RootScreenName.MAIN_WITH_MENU]: NavigatorScreenParams<DrawerNavigationParamList>;
  [RootScreenName.PRODUCTS]: undefined;
  [RootScreenName.MY_LIST]: undefined;
};

export type { RootNavigationParamList };
