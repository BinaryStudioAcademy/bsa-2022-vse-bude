import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const footer = ({ colors, spaces }: Theme) => css`
  padding: ${spaces.xl8} 0;
  background-color: ${colors.secondaryDark};
`;
