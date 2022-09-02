import { RootScreenName } from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.MAIN]?: { screen: string };
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.PERSONAL_INFO]: undefined;
  [RootScreenName.SETTINGS]: undefined;
  [RootScreenName.MESSAGES]: undefined;
  [RootScreenName.VERIFY]?: { screen: string };
  [RootScreenName.SUPPORT]: undefined;
  [RootScreenName.WELCOME]: undefined;
  [RootScreenName.NEW_ITEM]: undefined;
};

export type { RootNavigationParamList };
