import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const priceWrapper = ({
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
}: Theme) => css`
  color: ${colors.text};
  font-weight: ${fontWeights.h5};
  font-size: ${fontSizes.h5};
  line-height: ${lineHeights.h5};
`;
