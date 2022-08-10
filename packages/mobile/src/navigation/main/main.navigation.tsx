import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreenName } from '~/common/enums/enums';
import { Home, Favorite, MyList, Account } from '~/screens/screens';
import { Text } from '~/components/components';

const Tab = createBottomTabNavigator();

const screenOptions = {
  animationEnabled: true,
  headerShown: false,
  tabBarInactiveTintColor: '#6A6C6D',
  tabBarStyle: { minHeight: 60 },
};

interface ITabOptionProps {
  focused: boolean;
  color: string;
}

const getTabOptions = (label: string) => ({
  tabBarLabel: ({ focused, color }: ITabOptionProps) => (
    <Text
      style={{
        color: focused ? '#F1B313' : color,
        fontSize: 10,
        paddingBottom: 10,
      }}
    >
      {label}
    </Text>
  ),
});

const MainNavigation = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name={MainScreenName.HOME}
      component={Home}
      options={getTabOptions('Home')}
    />
    <Tab.Screen
      name={MainScreenName.FAVORITE}
      component={Favorite}
      options={getTabOptions('Favorite')}
    />
    <Tab.Screen
      name={MainScreenName.MY_LIST}
      component={MyList}
      options={getTabOptions('My list')}
    />
    <Tab.Screen
      name={MainScreenName.ACCOUNT}
      component={Account}
      options={getTabOptions('Account')}
    />
  </Tab.Navigator>
);

export { MainNavigation };
