import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const logo = (theme: Theme) => css`
  display: block;
  width: ${theme.widths.logo};
  height: ${theme.heights.logo};
`;
