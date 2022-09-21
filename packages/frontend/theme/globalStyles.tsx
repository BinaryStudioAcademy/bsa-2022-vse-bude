import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }

  :root {
    --grid-columns: 12;
  }

  #nprogress .spinner {
    visibility: hidden !important;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    overflow: overlay;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: 'Raleway', sans-serif;
    @media (max-width: ${theme.breakpoints.xl}px) {
      font-size: 14px;
    }

    @media (max-width: ${theme.breakpoints.sm}px) {
      font-size: 12px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ${emotionNormalize}
`;

export const resetButton = css`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font: inherit;
`;
