import { useTheme } from '~/hooks/hooks';
import { NavigationDarkTheme, NavigationTheme } from '~/config/config';

const useCustomTheme = () => {
  const { dark } = useTheme();
  const darkColors = NavigationDarkTheme.colors;
  const lightColors = NavigationTheme.colors;

  const colors = dark ? darkColors : lightColors;

  return { dark, colors };
};

export { useCustomTheme };
