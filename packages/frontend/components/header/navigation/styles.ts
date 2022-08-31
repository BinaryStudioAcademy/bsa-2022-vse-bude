import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spaces.lg};
  margin: 0 ${spaces.xl};
`;

export const link = ({ colors }: Theme) => css`
  color: ${colors.primary};
`;
