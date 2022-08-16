import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const css_responsive = css`
  .display_none {
    display: none;
  }

  @media (max-width: 1024px) {
    .burger_menu_wrapper {
      position: sticky;
      /* display: none; */
      flex-direction: column;
      gap: 1em;
    }

    .navigation,
    .buttons_wrapper {
      flex-direction: column;
      gap: 1em;
    }

    .header_wrapper {
      display: flex;
      flex-direction: column;
    }

    .burger_menu_top {
      width: 100%;
    }
    .burger_menu_button {
      display: block;
    }
  }

  @media (min-width: 1025px) {
    .burger_menu_wrapper {
      display: flex;
    }
  }
`;

export const header = (theme: Theme) => css`
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.backgroundLight};
  height: auto;
`;

export const header_wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const logo_wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const navigation_wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const navigation = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  font-size: ${theme.fontSizes.tub};
`;

export const buttons_wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  flex-shrink: 0;
`;

export const button_create_account_text = (theme: Theme) => css`
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.buttonSmall};
`;

export const button_sign_in = (theme: Theme) => css`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.buttonSmall};
`;

export const burger_menu_button = (theme: Theme) => css`
  display: none;
  margin: 1em;
  font-size: ${theme.fontSizes.toggle};
  cursor: pointer;
`;

export const burger_menu_wrapper = css`
  display: flex;
  flex-grow: 1;
`;

export const burger_menu_top = css`
  display: flex;
  flex-grow: 0;

  align-items: center;
  justify-content: space-between;
`;
