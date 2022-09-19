import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const code = ({ colors, spaces }: Theme) => css`
  color: ${colors.primary};
  font-size: 182px;
  margin: 0 0 ${spaces.xl} 0;
`;

export const description = ({ spaces }: Theme) => css`
  margin: 0 0 ${spaces.xl} 0;
`;
