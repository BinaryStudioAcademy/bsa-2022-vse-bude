import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

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
