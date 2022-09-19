import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const absolute = css`
  position: absolute;
`;

export const popover = ({
  colors,
  radiuses,
  shadows,
  borders,
  zIndex,
}: Theme) => css`
  position: fixed;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.xs};
  background-color: ${colors.background};
  z-index: ${zIndex.popover};
`;
