import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const modalImageWrapper = css`
  max-width: 100vw;
  max-height: 70vh;
  position: relative;
`;

export const modalImage = css`
  display: block;
  width: 100%;
  max-height: inherit;
`;

export const modalClose = ({ spaces }: Theme) => css`
  position: absolute;
  top: ${spaces.md};
  right: ${spaces.md};
`;
