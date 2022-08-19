import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const popover = ({ colors, radiuses, shadows, borders }: Theme) => css`
  position: absolute;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.xs};
  background-color: ${colors.background};
`;
