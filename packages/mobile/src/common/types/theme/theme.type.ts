import { ColorValue } from 'react-native';

export type ThemeColors = {
  accent: ColorValue;
  card: string;
  backgroundThird: string;
  backgroundElements: string;
  line: string;
  placeholder: string;
  subtitle: string;
  buttonTextPrimary: string;
  buttonTextSecondary: string;
  buttonPrimaryBackground: ColorValue;
  buttonSecondaryBackground: ColorValue;
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
