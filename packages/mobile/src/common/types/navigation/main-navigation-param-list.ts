import { MainScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { WelcomeRootNavigationParamList } from './welcome-root-navigation-param-list';

type MainNavigationParamList = {
  [MainScreenName.HOME]: undefined;
  [MainScreenName.FAVORITE]: undefined;
  [MainScreenName.MY_LIST]: undefined;
  [MainScreenName.ACCOUNT_ROOT]: undefined;
  [MainScreenName.WELCOME_ROOT]: NavigatorScreenParams<WelcomeRootNavigationParamList>;
};

export type { MainNavigationParamList };
