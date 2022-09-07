import { RootScreenName } from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: undefined;
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.WELCOME]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
  [RootScreenName.ITEM_INFO]: { itemId: string };
  [RootScreenName.TYPE_OF_NEW_POST]: undefined;
};

export type { RootNavigationParamList };
