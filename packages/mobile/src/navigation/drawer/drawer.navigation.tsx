import React, { FC } from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { RootScreenName } from '~/common/enums/enums';
import { MainNavigation } from '../tabs/tabs.navigation';
import { DrawerContent } from './components/drawer-content';

const HomeWithMenuNavigation: FC = () => {
  const Drawer = createDrawerNavigator();

  const options: DrawerNavigationOptions = {
    headerShown: true,
    drawerStyle: {
      width: Dimensions.get('screen').width,
    },
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={options}
    >
      <Drawer.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
        options={{ drawerItemStyle: { height: 0 } }}
      />
    </Drawer.Navigator>
  );
};

export { HomeWithMenuNavigation };
