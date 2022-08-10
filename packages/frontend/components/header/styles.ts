import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const header = (theme: Theme) => css`
  padding: ${theme.spaces.lg} 0;
  background-color: ${theme.colors.backgroundLight};
`;
