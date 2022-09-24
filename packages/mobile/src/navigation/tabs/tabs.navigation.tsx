import React, { FC, useEffect } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { MainScreenName, RootScreenName } from '~/common/enums/enums';
import {
  MainNavigationParamList,
  RootNavigationProps,
} from '~/common/types/types';
import { Home, Favorite, ItemsAndServices, Account } from '~/screens/screens';
import { personalInfoActions } from '~/store/actions';
import { selectCurrentUser, selectPersonalInfo } from '~/store/selectors';
import {
  useCustomTheme,
  useAppSelector,
  useAppDispatch,
  useTranslation,
  useNavigation,
} from '~/hooks/hooks';
import {
  HomeIcon,
  LogInIcon,
  StarIcon,
  Text,
  UserIcon,
  ListIcon,
  ButtonText,
  BurgerMenu,
  Image,
  SearchIcon,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { Flag } from '~/screens/home/components/components';
import { TabBarButton } from '../components/components';
import { WelcomeNavigation } from '../welcome/welcome.navigation';
import { styles } from './styles';

const renderTabBarLabel =
  (label: string): BottomTabNavigationOptions['tabBarLabel'] =>
  ({ color }) =>
    <Text style={{ fontSize: 12, color }}>{label}</Text>;

const Tabs = createBottomTabNavigator<MainNavigationParamList>();

const MainNavigation: FC = () => {
  const { dark, colors } = useCustomTheme();
  const user = useAppSelector(selectCurrentUser);
  const personalInfo = useAppSelector(selectPersonalInfo);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();

  useEffect(() => {
    if (user) {
      dispatch(personalInfoActions.getPersonalInfo());
    }
  }, [user]);

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
    headerShadowVisible: false,
    headerLeftContainerStyle: { paddingStart: 15 },
    headerRightContainerStyle: { paddingEnd: 15 },
    headerTitleStyle: { fontSize: 16 },
    headerTitleAlign: 'center',
    tabBarButton: TabBarButton,
  };

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
        options={{
          tabBarLabel: renderTabBarLabel(t('common:tab_navigation.HOME')),
          tabBarIcon: HomeIcon,
          headerLeft: BurgerMenu,
          headerRight: ({ tintColor }) => (
            <SearchIcon color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: { backgroundColor: colors.whiteColor },
          headerTitleAlign: 'left',
          headerTitleContainerStyle: [
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
          ],
          headerShadowVisible: true,
          headerTitle: ({ allowFontScaling }) => (
            <>
              <Text
                style={[
                  globalStyles.fs22,
                  globalStyles.fontWeightExtraBold,
                  globalStyles.mr3,
                ]}
                allowFontScaling={allowFontScaling}
              >
                {t('home.HELP_UKRAINE')}
              </Text>
              <Flag />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name={MainScreenName.FAVORITE}
        component={Favorite}
        options={{
          tabBarLabel: renderTabBarLabel(t('common:tab_navigation.FAVORITE')),
          tabBarIcon: StarIcon,
          tabBarButton: (props) => <TabBarButton disabled={true} {...props} />,
        }}
      />
      <Tabs.Screen
        name={MainScreenName.PRODUCTS}
        component={ItemsAndServices}
        options={{
          tabBarLabel: renderTabBarLabel(t('common:tab_navigation.PRODUCTS')),
          tabBarIcon: ListIcon,
          headerShown: true,
          title: t('items_and_services.TITLE'),
          headerRight: () => (
            <ButtonText
              textStyle={globalStyles.fs16}
              onPress={() => {
                navigation.navigate(RootScreenName.FILTER);
              }}
            >
              {t('common:components.BUTTON_FILTER')}
            </ButtonText>
          ),
        }}
      />
      {user ? (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={Account}
          options={{
            tabBarLabel: renderTabBarLabel(t('common:tab_navigation.ACCOUNT')),
            tabBarIcon: userIcon,
          }}
        />
      ) : (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={WelcomeNavigation}
          options={{
            tabBarLabel: renderTabBarLabel(t('common:tab_navigation.LOG_IN')),
            tabBarIcon: LogInIcon,
            unmountOnBlur: true,
          }}
        />
      )}
    </Tabs.Navigator>
  );
};

export { MainNavigation };
