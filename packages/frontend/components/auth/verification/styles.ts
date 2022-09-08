import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const resendButton = ({ spaces }: Theme) => css`
  margin-top: ${spaces.lg};
`;

export const divider = css`
  border-top: 1px solid gray;
`;
