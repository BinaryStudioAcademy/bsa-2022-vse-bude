import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const header = (theme: Theme) => css`
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.backgroundLight};
  height: ${theme.heights.header};
`;

export const headerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const logoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const navigationWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const navigation = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
`;

export const buttonsWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  flex-shrink: 0;
`;

export const buttonCreateAccountText = (theme: Theme) => css`
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.buttonSmall};
`;

export const buttonSignIn = (theme: Theme) => css`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.buttonSmall};
`;
