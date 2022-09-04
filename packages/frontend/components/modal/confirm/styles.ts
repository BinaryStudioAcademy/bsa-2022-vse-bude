import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

export const header = ({ fontSizes, fontWeights }: Theme) => css`
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
`;

export const mainText = ({ fontSizes, fontWeights, colors }: Theme) => css`
  text-align: center;
  font-weight: ${fontWeights.body1};
  font-size: ${fontSizes.h6};
  color: ${colors.extraDark};
  padding: 20px 0;
`;

export const actionBtns = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: ${spaces.sm};
`;
