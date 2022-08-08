import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Colors } from '@vse-bude/shared';

const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const NavigationDarkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...Colors,
  },
};

export { NavigationTheme, NavigationDarkTheme };
