import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({
  colors,
  lineHeights,
  spaces,
  fontWeights,
  breakpoints,
  fontSizes,
}: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.lg};
  h3 {
    color: ${colors.text};
    font-weight: ${fontWeights.h3};
    font-size: ${fontSizes.h3};
    line-height: ${lineHeights.h3};
    text-align: center;
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin-bottom: ${spaces.sm};
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    h3 {
      font-size: ${fontSizes.h4};
    }
  }
`;
