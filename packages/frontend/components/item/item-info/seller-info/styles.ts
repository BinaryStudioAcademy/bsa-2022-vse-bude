import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

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

export const title = ({ spaces, breakpoints, fontSizes }: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.sm};

  @media (max-width: ${breakpoints.md}px) {
    h6 {
      font-size: ${fontSizes.body2};
    }
  }
`;

export const sellerProfileLink = css`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const seller = ({
  spaces,
  fontSizes,
  fontWeights,
  breakpoints,
  colors,
}: Theme) => css`
  display: flex;
  align-items: center;
  span {
    margin-left: ${spaces.sm};
    font-size: ${fontSizes.body2};
    font-weight: ${fontWeights.h5};
    color: ${colors.text};
    cursor: pointer;
  }
  margin-bottom: ${spaces.sm};

  @media (max-width: ${breakpoints.md}px) {
    span {
      font-size: ${fontSizes.body2};
    }
  }
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

export const contactSeller = ({ fontSizes, breakpoints }: Theme) => css`
  @media (max-width: ${breakpoints.md}px) {
    font-size: ${fontSizes.body2};
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${fontSizes.body3};
  }
`;

export const sellerSocialLink = ({ colors, spaces }: Theme) => css`
  display: inline-block;
  margin-left: ${spaces.sm};
  color: ${colors.text};
  text-transform: lowercase;
  text-decoration: none;

  &::first-letter {
    text-transform: uppercase !important;
  }
`;
