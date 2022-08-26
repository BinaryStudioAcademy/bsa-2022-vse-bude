import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const priceWrapper = ({
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  span {
    color: ${colors.text};
    font-weight: ${fontWeights.h5};
    font-size: ${fontSizes.h5};
    line-height: ${lineHeights.h5};
    &:last-child {
      margin-left: ${spaces.xs};
    }
  }
`;
