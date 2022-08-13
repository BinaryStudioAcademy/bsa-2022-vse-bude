import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const popover = ({ colors, radiuses }: Theme) => css`
  position: absolute;
  box-shadow: -3px 0px 9px rgba(222, 222, 222, 0.25),
    2px 2px 8px rgba(222, 222, 222, 0.25);
  border: 2px solid ${colors.backgroundLight};
  border-radius: ${radiuses.xs};
  box-sizing: border-box;
  background-color: white;
`;
