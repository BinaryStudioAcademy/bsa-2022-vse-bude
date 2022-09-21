import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const burgerOverlay = (theme: Theme) => css`
  position: fixed;
  z-index: ${theme.zIndex.burgerOverlay};
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spaces.md};
  width: 100%;
  padding: ${theme.spaces.xl1};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.bottom};

  .burger-navigation,
  .burger-buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaces.md};
  }

  .burger-navigation {
    a,
    & > div > button {
      color: ${theme.colors.extraDark} !important;
      &:hover {
        color: ${theme.colors.lightDark} !important;
        i {
          color: ${theme.colors.primary} !important;
        }
      }
    }
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
