import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const counter = ({
  colors,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  color: ${colors.textLight};
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  span {
    margin-left: ${spaces.xs};
  }
`;
