import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const desktopWrapper = ({ breakpoints }: Theme) => css`
  display: contents;
  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

export const mobileWrapper = ({ breakpoints }: Theme) => css`
  display: contents;
  @media (min-width: ${breakpoints.sm + 1}px) {
    display: none;
  }
`;
