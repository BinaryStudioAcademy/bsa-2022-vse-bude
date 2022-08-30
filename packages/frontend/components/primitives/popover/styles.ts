import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const popover = ({ colors, radiuses, shadows, borders }: Theme) => css`
  position: fixed;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.xs};
  background-color: ${colors.background};
  z-index: 999;
`;
