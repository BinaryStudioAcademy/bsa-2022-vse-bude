import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const container = ({ spaces, breakpoints }: Theme) => css`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${spaces.md};

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 540px;
    padding: 0 ${spaces.lg};
  }

  @media (min-width: ${breakpoints.md}px) {
    max-width: 720px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 960px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 1140px;
  }

  @media (min-width: ${breakpoints.xxl}px) {
    max-width: 1320px;
  }
`;
