import { useCustomTheme } from '~/hooks/hooks';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const { dark, colors } = useCustomTheme();

export const screenOptions: BottomTabNavigationOptions = {
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
