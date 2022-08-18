import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces, colors }: Theme) => css`
  margin-top: ${spaces.xl11};
  padding: ${spaces.xl11} 0;
  background: ${colors.secondaryDark};
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  color: ${colors.textFooter};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h6};
`;
