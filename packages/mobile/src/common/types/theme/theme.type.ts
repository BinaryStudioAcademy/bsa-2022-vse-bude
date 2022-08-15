export type ThemeColors = {
  accent: string;
  card: string;
  backgroundThird: string;
  backgroundElements: string;
  line: string;
  placeholder: string;
  subtitle: string;
  buttonTextPrimary: string;
  buttonTextSecondary: string;
  buttonPrimaryBackground: string;
  buttonSecondaryBackground: string;
  error: string;
  background: string;
  text: string;
  backgroundSecondary: string;
  borderButton: string;
  icon: string;
  titlePrimary: string;
  titleSecondary: string;
  logoYellow: string;
  logoBlue: string;
};

export type Theme = {
  dark: boolean;
  colors: ThemeColors;
};
