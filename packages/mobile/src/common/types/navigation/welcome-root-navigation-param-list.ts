import { WelcomeRootScreenName } from '~/common/enums/enums';

type WelcomeRootNavigationParamList = {
  [WelcomeRootScreenName.WELCOME]: undefined;
  [WelcomeRootScreenName.SIGN_IN]: undefined;
  [WelcomeRootScreenName.SIGN_UP]: undefined;
  [WelcomeRootScreenName.FORGOT_PASSWORD]: undefined;
};

export type { WelcomeRootNavigationParamList };
