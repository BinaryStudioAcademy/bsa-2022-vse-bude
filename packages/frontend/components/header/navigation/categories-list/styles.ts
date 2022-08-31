import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const option = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
`;
