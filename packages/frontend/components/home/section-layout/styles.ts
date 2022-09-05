import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  margin-bottom: ${spaces.xl1};

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: ${spaces.xl11};
  }
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
}: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.text};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};

  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${fontSizes.h5};
    font-weight: ${fontSizes.h5};
    line-height: ${fontSizes.h4};
  }
`;

export const loadMore = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
}: Theme) => css`
  color: ${colors.primaryLight};
  font-size: ${fontSizes.label};
  font-weight: ${fontWeights.h6};
  line-height: ${lineHeights.button};
  text-decoration: none;

  @media (min-width: ${breakpoints.md}px) {
    font-size: ${fontSizes.body1};
    font-weight: ${fontWeights.toggle};
    line-height: ${lineHeights.label};
  }
`;
