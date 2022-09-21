import React, { FC } from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { RootScreenName } from '~/common/enums/enums';
import { MainNavigation } from '../tabs/tabs.navigation';
import { DrawerContent } from './components/components';

const HomeWithMenuNavigation: FC = () => {
  const Drawer = createDrawerNavigator();

  const options: DrawerNavigationOptions = {
    headerShown: false,
    swipeEdgeWidth: 100,
    swipeEnabled: false,
  };

  return (
    <Drawer.Navigator screenOptions={options} drawerContent={DrawerContent}>
      <Drawer.Screen name={RootScreenName.MAIN} component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export { HomeWithMenuNavigation };
