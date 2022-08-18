import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl11};
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  margin: 0;
  color: ${colors.text};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};
`;
