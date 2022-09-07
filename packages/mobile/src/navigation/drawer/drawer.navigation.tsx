import React, { FC } from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { RootScreenName } from '~/common/enums/enums';
import { MainNavigation } from '../tabs/tabs.navigation';

const HomeWithMenuNavigation: FC = () => {
  const Drawer = createDrawerNavigator();

  const options: DrawerNavigationOptions = {
    headerShown: false,
    swipeEdgeWidth: 200,
    drawerStyle: {
      width: Dimensions.get('screen').width,
    },
  };

  return (
    <Drawer.Navigator screenOptions={options}>
      <Drawer.Screen name={RootScreenName.MAIN} component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export { HomeWithMenuNavigation };
