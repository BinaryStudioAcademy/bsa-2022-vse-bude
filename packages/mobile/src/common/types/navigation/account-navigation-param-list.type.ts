import { AccountScreenName } from '~/common/enums/enums';

type AccountNavigationParamList = {
  [AccountScreenName.ACCOUNT_ROOT]: undefined;
  [AccountScreenName.PERSONAL_INFO]: undefined;
  [AccountScreenName.SETTINGS]: undefined;
  [AccountScreenName.MESSAGES]: undefined;
  [AccountScreenName.SUPPORT]: undefined;
};

export type { AccountNavigationParamList };
