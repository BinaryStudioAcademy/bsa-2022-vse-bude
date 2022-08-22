import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const resendCodeBtn = ({ colors, fontSizes }: Theme) => css`
  text-align: center;
  font-weight: bold;
  color: ${colors.text};
  font-size: ${fontSizes.caption};
  text-decoration: underline;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const resendCodeTxt = ({ colors, fontSizes }: Theme) => css`
  font-weight: bold;
  color: ${colors.text};
  font-size: ${fontSizes.caption};
  cursor: not-allowed;
`;

export const resendCodeBlock = css`
  text-align: center;
`;
