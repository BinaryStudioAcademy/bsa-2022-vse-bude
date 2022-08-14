import { RootScreenName } from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.MAIN]: undefined;
  [RootScreenName.SIGN_UP]: undefined;
  [RootScreenName.SIGN_IN]: undefined;
  [RootScreenName.WELCOME]: undefined;
};

export type { RootNavigationParamList };
