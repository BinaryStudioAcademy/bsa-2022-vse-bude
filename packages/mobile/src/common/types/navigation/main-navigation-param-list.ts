import { MainScreenName } from '~/common/enums/enums';

type MainNavigationParamList = {
  [MainScreenName.HOME]: undefined;
  [MainScreenName.LOG_IN]: undefined;
  [MainScreenName.ACCOUNT_ROOT]: undefined;
  [MainScreenName.PRODUCTS]: undefined;
  [MainScreenName.FAVORITE]: undefined;
};

export type { MainNavigationParamList };
