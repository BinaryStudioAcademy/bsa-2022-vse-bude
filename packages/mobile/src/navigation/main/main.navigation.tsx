import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCustomTheme } from '~/hooks/hooks';
import { MainScreenName } from '~/common/enums/enums';
import { Home, Favorite, MyList, Account } from '~/screens/screens';
import { Text, CustomIcon } from '~/components/components';
import { IconName } from '~/common/enums/components/components';

type TabOptionProps = {
  focused: boolean;
  color: string;
};

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { dark, colors } = useCustomTheme();

  const screenOptions = {
    animationEnabled: true,
    headerShown: false,
    tabBarInactiveTintColor: colors.icon,
    tabBarStyle: {
      minHeight: 60,
      backgroundColor: dark ? colors.backgroundSecondary : colors.background,
      paddingVertical: 8,
    },
    tabBarHideOnKeyboard: true,
  };

  const getTabOptions = (label: string, icon: string) => ({
    tabBarIcon: ({ focused, color }: TabOptionProps) => (
      <CustomIcon
        name={icon}
        color={focused ? colors.accent : color}
        size={25}
      />
    ),
    tabBarLabel: ({ focused, color }: TabOptionProps) => (
      <Text
        style={{
          color: focused ? colors.accent : color,
          fontSize: 10,
          paddingBottom: 10,
        }}
      >
        {label}
      </Text>
    ),
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={MainScreenName.HOME}
        component={Home}
        options={getTabOptions(MainScreenName.HOME, IconName.HOME)}
      />
      <Tab.Screen
        name={MainScreenName.FAVORITE}
        component={Favorite}
        options={getTabOptions(MainScreenName.FAVORITE, IconName.STAR)}
      />
      <Tab.Screen
        name={MainScreenName.MY_LIST}
        component={MyList}
        options={getTabOptions(MainScreenName.MY_LIST, IconName.LIST)}
      />
      <Tab.Screen
        name={MainScreenName.ACCOUNT}
        component={Account}
        options={getTabOptions(MainScreenName.ACCOUNT, IconName.USER)}
      />
    </Tab.Navigator>
  );
};

export { MainNavigation };
