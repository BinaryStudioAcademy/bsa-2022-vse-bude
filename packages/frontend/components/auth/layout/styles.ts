import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

export const contentWrapper = ({ spaces }: Theme) => css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${spaces.xl6} 0;
`;
export const formWrapper = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
export const form = () => css`
  width: 100%;
  min-width: 327px;
`;
export const linkText = ({ fontSizes, colors, lineHeights }: Theme) => css`
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.text};
`;
export const inputWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;
export const headline = ({
  mq,
  colors,
  spaces,
  fontSizes,
  fontWeights,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  margin-top: 0;
  font-weight: ${fontWeights.h4};
  color: ${colors.secondaryDark};
  font-size: ${fontSizes.h3};
  ${mq[1]} {
    font-size: ${fontSizes.h4};
  }
`;
