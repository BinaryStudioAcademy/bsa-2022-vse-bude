import React, { FC, useEffect } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MainScreenName } from '~/common/enums/enums';
import { AppIcon, MainNavigationParamList } from '~/common/types/types';
import { Home, Favorite, ItemsAndServices, Account } from '~/screens/screens';
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
  LogInIcon,
  StarIcon,
  Text,
  UserIcon,
  ListIcon,
  ButtonText,
  BurgerMenu,
  Image,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import { WelcomeNavigation } from '../welcome/welcome.navigation';
import { styles } from './styles';

const Tabs = createBottomTabNavigator<MainNavigationParamList>();
type TabOptions = {
  label: string;
  tabBarIcon: AppIcon;
  headerLeft?: FC | undefined;
  headerRight?: FC | undefined;
  title?: string | undefined;
  headerShown?: boolean;
  headerStyle?: StyleProp<ViewStyle> | undefined;
};

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
    headerShadowVisible: false,
    headerLeftContainerStyle: { paddingStart: 15 },
    headerRightContainerStyle: { paddingEnd: 15 },
    headerTitleStyle: { fontSize: 16 },
    headerTitleAlign: 'center',
  };

  const getTabOptions = ({
    label,
    tabBarIcon,
    headerLeft,
    headerRight,
    title,
    headerShown = false,
    headerStyle,
  }: TabOptions): BottomTabNavigationOptions => ({
    tabBarIcon,
    tabBarLabel: ({ color }) => (
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    ),
    headerLeft,
    headerRight,
    title,
    headerShown,
    headerStyle,
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
        options={getTabOptions({
          label: t('common:tab_navigation.HOME'),
          tabBarIcon: HomeIcon,
          headerLeft: BurgerMenu,
          headerShown: true,
          headerStyle: { backgroundColor: colors.whiteColor },
          title: '',
        })}
      />
      <Tabs.Screen
        name={MainScreenName.FAVORITE}
        component={Favorite}
        options={getTabOptions({
          label: t('common:tab_navigation.FAVORITE'),
          tabBarIcon: StarIcon,
        })}
      />
      <Tabs.Screen
        name={MainScreenName.PRODUCTS}
        component={ItemsAndServices}
        options={getTabOptions({
          label: t('common:tab_navigation.PRODUCTS'),
          tabBarIcon: ListIcon,
          headerShown: true,
          title: t('items_and_services.TITLE'),
          headerRight: () => (
            <ButtonText
              textStyle={globalStyles.fs16}
              onPress={() => {
                //TODO
              }}
            >
              {t('common:components.BUTTON_FILTER')}
            </ButtonText>
          ),
        })}
      />
      {user ? (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={Account}
          options={getTabOptions({
            label: t('common:tab_navigation.ACCOUNT'),
            tabBarIcon: UserIcon,
          })}
        />
      ) : (
        <Tabs.Screen
          name={MainScreenName.ACCOUNT_ROOT}
          component={WelcomeNavigation}
          options={getTabOptions({
            label: t('common:tab_navigation.LOG_IN'),
            tabBarIcon: LogInIcon,
          })}
        />
      )}
    </Tabs.Navigator>
  );
};

export { MainNavigation };
