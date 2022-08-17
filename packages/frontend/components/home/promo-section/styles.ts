import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const promoMain = () => css`
  position: relative;
  padding: 125px 0;
`;

export const search = () => css`
  position: absolute;
  height: 60px;
  width: 600px;
  left: 50%;
  bottom: -30px;
  transform: translateX(-50%);
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  margin: 0;
  color: ${colors.text};
  font-size: ${fontSizes.h3};
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
  text-align: center;
`;

export const subTitle = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  margin: 0 auto;
  margin-top: ${spaces.md};
  max-width: 517px;
  color: ${colors.text};
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  text-align: center;
`;

export const greeting = () => css`
  height: 420px;
  background: linear-gradient(to top, #f4c50a 50%, #0c42a6 50%);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 64px;
  line-height: 114.88%;
  color: #ffffff;
`;
