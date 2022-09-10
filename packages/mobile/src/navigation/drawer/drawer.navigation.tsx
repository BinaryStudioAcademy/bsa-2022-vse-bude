import React, { FC } from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { DrawerNavigationParamList } from '~/common/types/navigation/drawer-navigation-param-list';
import { DrawerScreenName } from '~/common/enums/enums';
import { MainNavigation } from '../tabs/tabs.navigation';

const HomeWithMenuNavigation: FC = () => {
  const Drawer = createDrawerNavigator<DrawerNavigationParamList>();

  const options: DrawerNavigationOptions = {
    headerShown: false,
    swipeEdgeWidth: 200,
  };

  return (
    <Drawer.Navigator screenOptions={options}>
      <Drawer.Screen name={DrawerScreenName.MAIN} component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export { HomeWithMenuNavigation };
