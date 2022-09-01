import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ breakpoints }: Theme) => css`
  @media (max-width: ${breakpoints.lg}px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const option = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
`;
