import { MainScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { RegistrationNavigationParamList } from './registration-navigation-param-list';

type MainNavigationParamList = {
  [MainScreenName.HOME]: undefined;
  [MainScreenName.FAVORITE]: undefined;
  [MainScreenName.MY_LIST]: undefined;
  [MainScreenName.ACCOUNT_ROOT]: undefined;
  [MainScreenName.ACCOUNT_REGISTRATION]: NavigatorScreenParams<RegistrationNavigationParamList>;
};

export type { MainNavigationParamList };
