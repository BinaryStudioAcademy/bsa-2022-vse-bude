import { ColorValue } from 'react-native';

export type ThemeColors = {
  primary: ColorValue;
  secondary: ColorValue;
  onPrimary: ColorValue;
  onSecondary: ColorValue;
  accent: ColorValue;
  card: string;
  backgroundThird: string;
  backgroundElements: string;
  line: string;
  placeholder: string;
  placeholderLight: ColorValue;
  subtitle: string;
  buttonPrimaryBackground: ColorValue;
  buttonPrimaryText: string;
  buttonSecondaryBackground: ColorValue;
  buttonSecondaryText: string;
  error: string;
  background: ColorValue;
  text: string;
  backgroundSecondary: ColorValue;
  borderButton: string;
  icon: string;
  titlePrimary: string;
  titleSecondary: string;
  yellow: ColorValue;
  blue: ColorValue;
};

export type Theme = {
  dark: boolean;
  colors: ThemeColors;
};
