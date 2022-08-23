import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const trigger = css`
  cursor: pointer;
`;

export const body = ({ colors, spaces }: Theme) => css`
  position: absolute;
  max-width: 50%;
  overflow: hidden;
  background-color: ${colors.background};
  border-radius: ${spaces.xs};
  padding: ${spaces.sm};
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
`;
