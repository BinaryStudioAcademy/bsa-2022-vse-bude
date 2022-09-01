import { MainScreenName } from '~/common/enums/enums';

type MainNavigationParamList = {
  [MainScreenName.ACCOUNT_ROOT]: undefined;
  [MainScreenName.FAVORITE]: undefined;
  [MainScreenName.HOME]: undefined;
  [MainScreenName.LOG_IN]: undefined;
  [MainScreenName.MY_LIST]: undefined;
};

export type { MainNavigationParamList };
