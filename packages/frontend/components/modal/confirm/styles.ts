import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

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

export const actionBtns = css`
  display: flex;
  justify-content: center;
  & button:first-child {
    margin-right: 10px;
  }
`;
