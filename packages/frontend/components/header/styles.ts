import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const header = (theme: Theme) => css`
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.backgroundLight};
  height: auto;

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.heights.navigation};
    width: ${theme.widths.navigation};

    a {
      font-size: ${theme.fontSizes.tub};
      font-weight: ${theme.fontWeights.tub};
    }
  }

  .burger-menu-wrapper {
    display: flex;
    flex-grow: 1;
  }

  .burger-menu-button {
    display: none;
    margin: 1em;
    font-size: ${theme.fontSizes.toggle};
    cursor: pointer;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.lg}px) {
    .header-content {
      display: none;
    }

    .burger-menu-button {
      display: block;
    }
  }

  .burger-overlay {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 2em;
    background-color: ${theme.colors.backgroundDark};
  }

  .burger-overlay,
  .burger-navigation,
  .burger-buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .burger-navigation {
    a {
      font-size: ${theme.fontSizes.tub};
      font-weight: ${theme.fontWeights.tub};
    }
  }

  .burger-close-button {
    position: fixed;
    top: 2em;
    right: 2em;
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

export const headerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
