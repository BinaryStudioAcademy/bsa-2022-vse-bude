import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const contentWrapper = ({ spaces }: Theme) => css`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spaces.xl6} 0;
  @media screen and (max-width: 768px) {
    padding: ${spaces.lg} 0;
    height: 100%;
  }
`;
export const formWrapper = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0 16px;
`;
export const form = () => css`
  width: 100%;
  max-width: 327px;
`;
export const linkText = ({
  fontSizes,
  colors,
  lineHeights,
  spaces,
}: Theme) => css`
  margin: 0;
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.text};
  & span {
    margin-left: ${spaces.xs};
  }
`;
export const inputWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
`;
export const headline = ({
  colors,
  spaces,
  fontSizes,
  fontWeights,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.secondaryDark};
`;
