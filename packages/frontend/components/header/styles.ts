import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const header = (theme: Theme) => css`
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.backgroundLight};
`;

export const buttonCreateAccountText = (theme: Theme) => css`
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.buttonSmall};
`;

export const buttonSignIn = (theme: Theme) => css`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.buttonSmall};
`;
