import React, { FC, useEffect } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MainScreenName } from '~/common/enums/enums';
import { AppIcon, MainNavigationParamList } from '~/common/types/types';
import { Home, Favorite, MyList, Account } from '~/screens/screens';
import { personalInfoActions } from '~/store/actions';
import { selectCurrentUser, selectPersonalInfo } from '~/store/selectors';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useTranslation,
} from '~/hooks/hooks';
import {
  HomeIcon,
  ListIcon,
  LogInIcon,
  StarIcon,
  Text,
  UserIcon,
  Image,
} from '~/components/components';
import { WelcomeNavigation } from '../welcome/welcome.navigation';
import { favoriteScreenOptions } from '../screen-options/screen-options';
import { styles } from './styles';

const Tabs = createBottomTabNavigator<MainNavigationParamList>();

const MainNavigation: FC = () => {
  const { dark, colors } = useCustomTheme();
  const user = useAppSelector(selectCurrentUser);
  const personalInfo = useAppSelector(selectPersonalInfo);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(personalInfoActions.getPersonalInfo());
  }, []);

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
    title?: string,
  ): BottomTabNavigationOptions => ({
    tabBarIcon,
    tabBarLabel: ({ color }) => (
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    ),
    title,
  });

  const userIcon = personalInfo?.avatar
    ? () => (
        <Image source={{ uri: personalInfo?.avatar }} style={styles.avatar} />
      )
    : UserIcon;

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={MainScreenName.HOME}
        component={Home}
        options={getTabOptions(t('common:tab_navigation.HOME'), HomeIcon)}
      />
      <Tabs.Group screenOptions={favoriteScreenOptions}>
        <Tabs.Screen
          name={MainScreenName.FAVORITE}
          component={Favorite}
          options={getTabOptions(
            t('common:tab_navigation.FAVORITE'),
            StarIcon,
            t('common:tab_navigation.FAVORITE'),
          )}
        />
      </Tabs.Group>
      <Tabs.Screen
        name={MainScreenName.MY_LIST}
        component={MyList}
        options={getTabOptions(t('common:tab_navigation.MY_LIST'), ListIcon)}
      />
      {user ? (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={Account}
          options={getTabOptions(t('common:tab_navigation.ACCOUNT'), userIcon)}
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
