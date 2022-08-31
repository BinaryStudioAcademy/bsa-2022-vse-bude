import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const burgerOverlay = (theme: Theme) => css`
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spaces.md};
  width: 100%;
  padding: ${theme.spaces.xl1};
  background-color: ${theme.colors.backgroundLight};

  .burger-navigation,
  .burger-buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaces.md};
  }

  .burger-close-button {
    position: fixed;
    top: ${theme.spaces.xl1};
    right: ${theme.spaces.xl1};
  }
`;

export const buttonCreateAccountText = (theme: Theme) => css`
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.buttonSmall};
`;

export const buttonSignIn = (theme: Theme) => css`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.buttonSmall};
`;
