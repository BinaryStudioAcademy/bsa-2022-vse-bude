import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const sellerInfoWrapper = ({
  spaces,
  colors,
  radiuses,
  fontSizes,
  lineHeights,
}: Theme) => css`
  padding: ${spaces.xl};
  margin: ${spaces.lg} 0;
  border: 1px solid ${colors.backgroundDark};
  border-radius: ${radiuses.sm};
  h6 {
    font-size: ${fontSizes.h6};
    line-height: ${lineHeights.h6};
  }
`;

export const title = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.sm};
`;

export const seller = ({ spaces, fontSizes, fontWeights }: Theme) => css`
  display: flex;
  align-items: center;
  span {
    margin-left: ${spaces.sm};
    font-size: ${fontSizes.body2};
    font-weight: ${fontWeights.h5};
  }
  margin-bottom: ${spaces.sm};
`;

export const contacts = ({
  spaces,
  fontSizes,
  lineHeights,
  breakpoints,
}: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin-right: ${spaces.lg};
    span {
      margin-left: ${spaces.xs};
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

export const phone = ({
  spaces,
  fontSizes,
  lineHeights,
  breakpoints,
}: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    margin-bottom: ${spaces.sm};
  }
`;
