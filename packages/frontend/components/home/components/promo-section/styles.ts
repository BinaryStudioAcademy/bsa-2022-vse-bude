import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const promoMain = () => css`
  padding: 125px 0;
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  color: ${colors.text};
  font-size: ${fontSizes.h3};
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
`;
