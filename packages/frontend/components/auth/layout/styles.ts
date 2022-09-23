import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const contentWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: 0 ${spaces.xl6};
`;
export const formWrapper = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
export const form = ({ breakpoints }: Theme) => css`
  width: 375px;

  @media (max-width: ${breakpoints.lg}px) {
    width: 300px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 240px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 327px;
  }
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
  ${mq[2]} {
    font-size: ${fontSizes.h4};
  }
`;
