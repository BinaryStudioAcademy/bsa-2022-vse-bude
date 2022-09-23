import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = css`
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;

export const option = ({ fontSizes, lineHeights, colors }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  &:last-child {
    color: ${colors.primaryLight};
  }
`;
