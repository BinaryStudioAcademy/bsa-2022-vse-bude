import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const footer = ({ colors, spaces }: Theme) => css`
  padding: ${spaces.xl8} 0;
  background-color: ${colors.secondaryDark};
`;
