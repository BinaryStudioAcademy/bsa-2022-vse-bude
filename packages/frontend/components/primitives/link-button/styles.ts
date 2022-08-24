import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const resendCodeBtn = ({ colors, fontSizes }: Theme) => css`
  text-align: center;
  font-weight: bold;
  color: ${colors.text};
  text-decoration: underline;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  &[data-size='small'] {
    font-size: ${fontSizes.caption};
  }
`;
