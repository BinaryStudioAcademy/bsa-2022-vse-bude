import type { ReactNode } from 'react';
import { useState, useInsertionEffect } from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { darkTheme, lightTheme, globalStyles } from 'theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const colorSchemes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useState(colorSchemes['light']);

  useInsertionEffect(() => {
    document.html.style.opacity = '1';
  }, []);

  return (
    <ThemeProviderEmotion theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProviderEmotion>
  );
};

export { ThemeProvider };
