import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { resetButton } from 'theme';

export const header = (theme: Theme) => css`
  position: sticky;
  z-index: ${theme.zIndex.header};
  top: 0;
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.white};
  height: ${theme.heights.header};
  box-shadow: 0px 6px 10px 0px #dedede80;

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spaces.lg};
    margin: 0 ${theme.spaces.xl};
  }

  .header-content {
    margin-left: ${theme.spaces.xl5};
  }

  .header-btn-group {
    margin-left: ${theme.spaces.lg};
  }

  .burger-menu-wrapper {
    display: flex;
    flex-grow: 1;
  }

  .burger-menu-button {
    ${resetButton}
    display: none;
    margin: ${theme.spaces.sm};
    font-size: ${theme.fontSizes.toggle};
    cursor: pointer;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spaces.sm};
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.lg}px) {
    .header-content,
    .header-btn-group {
      display: none;
    }

    .burger-menu-button {
      display: block;
    }
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

export const headerInner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

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
  background-color: ${theme.colors.backgroundLight};

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
    button {
      font-size: ${theme.fontSizes.tub};
      font-weight: ${theme.fontWeights.tub};
    }
  }

  .burger-close-button {
    position: fixed;
    top: ${theme.spaces.xl1};
    right: ${theme.spaces.xl1};
  }
`;

export const searchButton = ({ spaces }: Theme) => css`
  margin-left: ${spaces.xs};
`;
