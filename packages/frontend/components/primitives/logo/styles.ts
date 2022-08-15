import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const logo = (theme: Theme) => css`
  position: relative;
  display: block;
  width: ${theme.widths.logo};
  height: ${theme.heights.logo};
`;
