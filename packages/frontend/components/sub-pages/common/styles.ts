import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const sectionHeader = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.text};
`;
