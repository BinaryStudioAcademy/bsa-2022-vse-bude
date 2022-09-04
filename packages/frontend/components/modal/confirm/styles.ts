import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const header = ({ fontSizes }: Theme) => css`
  font-size: ${fontSizes.h4};
`;

export const mainText = ({ fontSizes, fontWeights, colors }: Theme) => css`
  text-align: center;
  font-weight: ${fontWeights.h4};
  font-size: ${fontSizes.h6};
  color: ${colors.extraDark};
  padding: 20px 0;
  border-top: 1px solid ${colors.textLight};
`;

export const actionBtns = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  gap: ${spaces.sm};
`;
