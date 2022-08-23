import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreenName } from '~/common/enums/enums';
import { Home, Favorite, MyList, Account } from '~/screens/screens';
import { useCustomTheme } from '~/hooks/hooks';
import {
  HomeIcon,
  ListIcon,
  StarIcon,
  UserIcon,
} from '~/components/components';
import { getScreenOptions, getTabOptions } from './helpers/helper';

const Tabs = createBottomTabNavigator();

const PrivateNavigation: FC = () => {
  const theme = useCustomTheme();

  return (
    <Tabs.Navigator screenOptions={getScreenOptions(theme)}>
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
        component={Account}
        options={getTabOptions(MainScreenName.ACCOUNT_ROOT, UserIcon)}
      />
    </Tabs.Navigator>
  );
};

export { PrivateNavigation };
