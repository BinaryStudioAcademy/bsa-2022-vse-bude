import { css } from '@emotion/react';
import { ColorPalette } from '@vse-bude/shared';
import type { Theme } from '../../../theme';

export const timerBadge = () => css`
  padding: 7px 13px;
  border: 1px solid ${ColorPalette.GRAY_200};
  box-shadow: 0 2px 4px 0 #dedede40;
  border-radius: 23px;
  width: 170px;
  text-align: center;
  background: #ffffff;
`;

export const timerValue = ({ fontWeights, fontSizes }: Theme) => css`
  color: ${ColorPalette.GREEN_200};
  font-weight: ${fontWeights.body1};
  font-size: ${fontSizes.body2};
`;
