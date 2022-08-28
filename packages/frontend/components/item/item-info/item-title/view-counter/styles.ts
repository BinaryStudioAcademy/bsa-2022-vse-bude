import { css } from '@emotion/react';
import type { Theme } from 'theme';

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
