import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import type { Theme } from './theme';

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
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
    color: ${theme.colors.background};
    font-family: 'Raleway', sans-serif;
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
