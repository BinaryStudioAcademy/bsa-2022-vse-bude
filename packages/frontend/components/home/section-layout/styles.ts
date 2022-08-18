import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  margin-top: ${spaces.xl1};

  @media (min-width: ${breakpoints.md}px) {
    margin-top: ${spaces.xl11};
  }
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
}: Theme) => css`
  &[with-out-title] {
    display: none;
  }
  color: ${colors.text};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};

  @media (min-width: ${breakpoints.md}px) {
    display: block;
  }
`;
