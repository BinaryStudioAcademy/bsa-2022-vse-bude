import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { useCustomTheme } from '~/hooks/hooks';
import { MainScreenName } from '~/common/enums/enums';
import { AppIcon } from '~/common/types/types';
import { Home, Favorite, MyList } from '~/screens/screens';
import {
  Text,
  HomeIcon,
  ListIcon,
  StarIcon,
  UserIcon,
} from '~/components/components';
import { ColorPalette } from '@vse-bude/shared';
import { StyleProp, ViewStyle } from 'react-native';
import { AccountNavigation } from '../account/account.navigation';

const Tabs = createBottomTabNavigator();

const MainNavigation = () => {
  const { dark, colors } = useCustomTheme();

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.accent,
    tabBarStyle: {
      minHeight: 60,
      backgroundColor: dark ? colors.backgroundSecondary : colors.background,
    },
    tabBarItemStyle: {
      paddingVertical: 8,
    },
    tabBarHideOnKeyboard: true,
  };

  const getTabOptions = (
    label: string,
    tabBarIcon: AppIcon,
    tabBarStyle?: StyleProp<ViewStyle>,
    tabBarInactiveTintColor?: string,
  ): BottomTabNavigationOptions => ({
    tabBarIcon,
    tabBarLabel: ({ color }) => (
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    ),
    tabBarStyle: tabBarStyle ?? {
      backgroundColor: ColorPalette.WHITE_100,
      minHeight: 60,
    },
    tabBarInactiveTintColor: tabBarInactiveTintColor ?? ColorPalette.GRAY_300,
  });

  const darkTabBarStyle: StyleProp<ViewStyle> = {
    backgroundColor: ColorPalette.GREEN_100,
    minHeight: 60,
  };
  const darkInactiveTintColorStyle = ColorPalette.WHITE_100;

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={MainScreenName.HOME}
        component={Home}
        options={getTabOptions(MainScreenName.HOME, HomeIcon)}
      />
      <Tabs.Screen
        name={MainScreenName.FAVORITE}
        component={Favorite}
        options={getTabOptions(MainScreenName.FAVORITE, StarIcon)}
      />
      <Tabs.Screen
        name={MainScreenName.MY_LIST}
        component={MyList}
        options={getTabOptions(MainScreenName.MY_LIST, ListIcon)}
      />
      <Tabs.Screen
        name={MainScreenName.ACCOUNT_ROOT}
        component={AccountNavigation}
        options={getTabOptions(
          MainScreenName.ACCOUNT_ROOT,
          UserIcon,
          darkTabBarStyle,
          darkInactiveTintColorStyle,
        )}
      />
    </Tabs.Navigator>
  );
};

export { MainNavigation };
