import { RootScreenName } from '~/common/enums/enums';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainNavigationParamList } from './main-navigation-param-list';

type DrawerNavigationParamList = {
  [RootScreenName.MAIN]: NavigatorScreenParams<MainNavigationParamList>;
};

export type { DrawerNavigationParamList };
