import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const logo = (theme: Theme) => css`
  position: relative;
  display: block;
  width: ${theme.widths.logo};
  height: ${theme.heights.logo};
`;
