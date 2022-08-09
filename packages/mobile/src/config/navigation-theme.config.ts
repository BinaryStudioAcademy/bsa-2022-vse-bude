import { ColorPalette } from '@vse-bude/shared';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const COMMON_COLORS = {
  accent: ColorPalette.YELLOW_100,
  organ: ColorPalette.GREEN_200,
  card: ColorPalette.GRAY_100,
  inputBg: ColorPalette.GRAY_100,
  dropdownBg: ColorPalette.GRAY_100,
  circleBg: ColorPalette.GRAY_100,
  line: ColorPalette.GRAY_200,
  placeholder: ColorPalette.BLACK_100,
  subtitle: ColorPalette.GRAY_300,
  buttonTextPrimary: ColorPalette.WHITE_100,
  buttonTextSecondary: ColorPalette.GREEN_200,
  buttonBgDark: ColorPalette.GREEN_200,
  error: ColorPalette.RED_100,
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
    iconPrimary: ColorPalette.GREEN_200,
    iconSecondary: ColorPalette.GRAY_300,
    titlePrimary: ColorPalette.BLACK_100,
    titleSecondary: ColorPalette.GREEN_200,
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
    iconPrimary: ColorPalette.WHITE_100,
    iconSecondary: ColorPalette.YELLOW_100,
    titlePrimary: ColorPalette.WHITE_100,
    titleSecondary: ColorPalette.WHITE_100,
  },
};

export { NavigationTheme, NavigationDarkTheme };
