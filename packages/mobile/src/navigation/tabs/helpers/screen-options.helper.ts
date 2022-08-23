import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const getScreenOptions = ({
  dark,
  colors,
}: {
  dark: boolean;
  colors: Record<string, string>;
}): BottomTabNavigationOptions => {
  return {
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
};
