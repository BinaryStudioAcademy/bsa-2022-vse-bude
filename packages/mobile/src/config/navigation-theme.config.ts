import { ColorPalette } from '@vse-bude/shared';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const COMMON_COLORS = {
  accent: ColorPalette.YELLOW_100,
  card: ColorPalette.GRAY_100,
  backgroundThird: ColorPalette.GREEN_200,
  backgroundElements: ColorPalette.GRAY_100,
  line: ColorPalette.GRAY_200,
  placeholder: ColorPalette.BLACK_100,
  buttonTextPrimary: ColorPalette.WHITE_100,
  buttonTextSecondary: ColorPalette.GREEN_200,
  buttonPrimaryBackground: ColorPalette.YELLOW_100,
  buttonSecondaryBackground: ColorPalette.GREEN_200,
  error: ColorPalette.RED_100,
  flagTop: ColorPalette.BLUE_100,
  flagBottom: ColorPalette.YELLOW_50,
  whiteColor: ColorPalette.WHITE_100,
};

const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...COMMON_COLORS,
    background: ColorPalette.WHITE_100,
    text: ColorPalette.BLACK_100,
    backgroundSecondary: ColorPalette.GRAY_100,
    borderButton: ColorPalette.GREEN_200,
    icon: ColorPalette.GRAY_300,
    titlePrimary: ColorPalette.BLACK_100,
    titleSecondary: ColorPalette.GREEN_200,
    yellow: ColorPalette.YELLOW_200,
    blue: ColorPalette.BLUE_100,
    subtitle: ColorPalette.GRAY_300,
  },
};

const NavigationDarkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...COMMON_COLORS,
    background: ColorPalette.GREEN_200,
    text: ColorPalette.WHITE_100,
    backgroundSecondary: ColorPalette.GREEN_100,
    borderButton: ColorPalette.WHITE_100,
    icon: ColorPalette.WHITE_100,
    titlePrimary: ColorPalette.WHITE_100,
    titleSecondary: ColorPalette.WHITE_100,
    yellow: ColorPalette.WHITE_100,
    blue: ColorPalette.WHITE_100,
    subtitle: ColorPalette.YELLOW_100,
  },
};

export { NavigationTheme, NavigationDarkTheme };
