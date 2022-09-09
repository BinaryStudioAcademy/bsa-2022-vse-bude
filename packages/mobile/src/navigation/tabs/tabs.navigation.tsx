import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MainScreenName } from '~/common/enums/enums';
import { AppIcon, MainNavigationParamList } from '~/common/types/types';
import { Home, Favorite, MyList, Account } from '~/screens/screens';
import { useAppSelector, useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  HomeIcon,
  ListIcon,
  LogInIcon,
  StarIcon,
  Text,
  UserIcon,
} from '~/components/components';
import { selectCurrentUser } from '~/store/selectors';
import { WelcomeNavigation } from '../welcome/welcome.navigation';

const Tabs = createBottomTabNavigator<MainNavigationParamList>();

const MainNavigation: FC = () => {
  const { dark, colors } = useCustomTheme();
  const user = useAppSelector(selectCurrentUser);
  const { t } = useTranslation();

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
  ): BottomTabNavigationOptions => ({
    tabBarIcon,
    tabBarLabel: ({ color }) => (
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    ),
  });

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={MainScreenName.HOME}
        component={Home}
        options={getTabOptions(t('common:tab_navigation.HOME'), HomeIcon)}
      />
      <Tabs.Screen
        name={MainScreenName.FAVORITE}
        component={Favorite}
        options={getTabOptions(t('common:tab_navigation.FAVORITE'), StarIcon)}
      />
      <Tabs.Screen
        name={MainScreenName.MY_LIST}
        component={MyList}
        options={getTabOptions(t('common:tab_navigation.MY_LIST'), ListIcon)}
      />
      {user ? (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={Account}
          options={getTabOptions(t('common:tab_navigation.ACCOUNT'), UserIcon)}
        />
      ) : (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={WelcomeNavigation}
          options={getTabOptions(t('common:tab_navigation.LOG_IN'), LogInIcon)}
        />
      )}
    </Tabs.Navigator>
  );
};

export { MainNavigation };
