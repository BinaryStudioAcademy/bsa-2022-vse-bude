import { css } from '@emotion/react';
import { ColorPalette } from '@vse-bude/shared';
import type { Theme } from '../../../theme';

export const timerBadge = ({ spaces, radiuses }: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${spaces.sm} ${spaces.md};
  border: 1px solid ${ColorPalette.GRAY_200};
  box-shadow: 0 2px 4px 0 #dedede40;
  border-radius: ${radiuses.lg};
  width: 170px;
  background: #ffffff;
  white-space: nowrap;
`;

export const timerIcon = css`
  margin-right: 5px;
`;
