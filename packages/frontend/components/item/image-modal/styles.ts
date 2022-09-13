import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const modalImageWrapper = ({ breakpoints }: Theme) => css`
  max-width: 100vw;
  max-height: 70vh;
  min-height: 300px;
  min-width: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.sm}px) {
    min-height: 200px;
    min-width: 200px;
  }
`;

export const modalImage = ({ breakpoints }: Theme) => css`
  display: block;
  min-height: 300px;
  max-height: inherit;
  position: relative !important;
  @media (max-width: ${breakpoints.sm}px) {
    min-height: 200px;
  }
`;

export const modalClose = ({ spaces }: Theme) => css`
  position: absolute;
  top: ${spaces.md};
  right: ${spaces.md};
`;

export const hideImage = css`
  visibility: hidden;
`;
