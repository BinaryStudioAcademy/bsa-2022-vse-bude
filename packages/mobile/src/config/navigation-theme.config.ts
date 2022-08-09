import { Colors } from '@vse-bude/shared';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const COMMON_COLORS = {
  accent: Colors.ACCENT_PRIMARY,
  organ: Colors.ORGAN_BG,
  card: Colors.CARD_BG,
  inputBg: Colors.INPUT_BG,
  dropdownBg: Colors.DROPDOWN_BG,
  circleBg: Colors.CIRCLE_BG,
  line: Colors.LINE,
  placeholder: Colors.PLACEHOLDER,
  subtitle: Colors.SUBTITLE,
  buttonTextPrimary: Colors.BUTTON_TEXT_PRIMARY,
  buttonTextSecondary: Colors.BUTTON_TEXT_SECONDARY,
  buttonBgDark: Colors.BUTTON_BG_DARK,
  error: Colors.ERROR,
};

const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...COMMON_COLORS,
    background: Colors.BACKGROUND_PRIMARY,
    text: Colors.TEXT_PRIMARY,
    backgroundSecondary: Colors.BACKGROUND_SECONDARY,
    borderButton: Colors.BORDER_BUTTON,
    iconPrimary: Colors.ICON_PRIMARY,
    iconSecondary: Colors.ICON_SECONDARY,
    titlePrimary: Colors.TITLE_PRIMARY,
    titleSecondary: Colors.TITLE_SECONDARY,
  },
};

const NavigationDarkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...COMMON_COLORS,
    background: Colors.BACKGROUND_PRIMARY_DT,
    text: Colors.TEXT_SECONDARY,
    backgroundSecondary: Colors.BACKGROUND_SECONDARY_DT,
    borderButton: Colors.BORDER_BUTTON_DT,
    iconPrimary: Colors.TEXT_SECONDARY,
    iconSecondary: Colors.ACCENT_PRIMARY,
    titlePrimary: Colors.TEXT_SECONDARY,
    titleSecondary: Colors.TEXT_SECONDARY,
  },
};

export { NavigationTheme, NavigationDarkTheme };
