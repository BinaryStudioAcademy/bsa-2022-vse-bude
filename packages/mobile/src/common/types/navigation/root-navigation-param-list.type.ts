import { RootScreenName } from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: { screen: string } | undefined;
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.VERIFY_PHONE]: undefined;
  [RootScreenName.VERIFY_CODE_PHONE]: undefined;
  [RootScreenName.VERIFIED_PHONE]: undefined;
  [RootScreenName.VERIFY_CODE_EMAIL]: undefined;
  [RootScreenName.VERIFIED_EMAIL]: undefined;
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.WELCOME]: undefined;
  [RootScreenName.FORGOT_PASSWORD]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
  [RootScreenName.NEW_AUCTION]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
  [RootScreenName.TYPE_OF_NEW_POST]: undefined;
  [RootScreenName.MAIN_WITH_MENU]: undefined;
  [RootScreenName.ITEMS_AND_SERVICES]: undefined;
};

export type { RootNavigationParamList };
