import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const contentWrapper = ({ mq, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: ${spaces.lg} 0;
  ${mq[1]} {
    height: 100vh;
    padding: ${spaces.xl6} 0;
  }
`;
export const formWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0 16px;
`;
export const form = ({ mq }: Theme) => css`
  width: 100%;
  max-width: 342px;
  ${mq[1]} {
    max-width: 327px;
  }
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
