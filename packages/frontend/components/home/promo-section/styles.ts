import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const promoMain = ({ breakpoints, spaces }: Theme) => css`
  position: relative;
  padding-top: ${spaces.md};

  @media (min-width: ${breakpoints.md}px) {
    padding: 125px 0;
  }
`;

export const search = ({ breakpoints }: Theme) => css`
  @media (min-width: ${breakpoints.md}px) {
    position: absolute;
    height: 60px;
    width: 600px;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
}: Theme) => css`
  display: none;

  @media (min-width: ${breakpoints.md}px) {
    display: block;
    margin: 0;
    color: ${colors.text};
    font-size: ${fontSizes.h3};
    font-weight: ${fontWeights.h3};
    line-height: ${lineHeights.h3};
    text-align: center;
  }
`;

export const mobileTitle = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  spaces,
}: Theme) => css`
  display: flex;
  align-items: center;
  color: ${colors.text};
  font-size: ${fontSizes.h3};
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
  span {
    margin-right: ${spaces.md};
  }

  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`;

export const subTitle = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
  breakpoints,
}: Theme) => css`
  display: none;

  @media (min-width: ${breakpoints.md}px) {
    display: block;
    margin: 0 auto;
    margin-top: ${spaces.md};
    max-width: 517px;
    color: ${colors.text};
    font-size: ${fontSizes.body1};
    font-weight: ${fontWeights.body1};
    line-height: ${lineHeights.body1};
    text-align: center;
  }
`;

export const greeting = ({ breakpoints }: Theme) => css`
  display: none;

  @media (min-width: ${breakpoints.md}px) {
    height: 420px;
    background: linear-gradient(to top, #f4c50a 50%, #0c42a6 50%);
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 64px;
    line-height: 114.88%;
    color: #ffffff;
  }
`;
