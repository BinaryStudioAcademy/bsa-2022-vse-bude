import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const heading = ({ fontSizes, fontWeights, lineHeights }: Theme) => css`
  margin: 0;
  font-size: ${fontSizes.h3};
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
`;
