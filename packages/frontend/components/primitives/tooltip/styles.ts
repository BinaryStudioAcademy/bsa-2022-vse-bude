import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const body = ({ colors, spaces, fontSizes }: Theme) => css`
  position: absolute;
  z-index: 101;
  max-width: 30%;
  overflow: hidden;
  background-color: ${colors.background};
  border-radius: ${spaces.xs};
  padding: ${spaces.xs};
  font-size: ${fontSizes.tooltip};
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
`;
