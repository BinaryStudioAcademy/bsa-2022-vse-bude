import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const innerWrapper = ({ spaces }: Theme) => css`
  width: 90vw;
  height: 90vh;
  max-width: 915px;
  max-height: 650px;
  padding: ${spaces.xl2} ${spaces.md} 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const btnWrapper = ({
  fontSizes,
  fontWeights,
  colors,
  lineHeights,
}: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 340px;

  & span {
    font-family: inherit;
    font-size: ${fontSizes.body2};
    font-weight: ${fontWeights.body2};
    line-height: ${lineHeights.body2};
    color: ${colors.textLight};
  }
`;

export const headline = ({
  spaces,
  fontSizes,
  fontWeights,
  colors,
  lineHeights,
}: Theme) => css`
  margin-bottom: ${spaces.xs};
  font-family: inherit;
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};
  color: ${colors.text};
`;

export const xmark = ({ spaces, mq }: Theme) => css`
  position: absolute;
  top: ${spaces.xl};
  right: ${spaces.xl1};
  ${mq[0]} {
    top: ${spaces.xl2};
    right: ${spaces.xl3};
  }
`;

export const arrow = ({ spaces, mq }: Theme) => css`
  position: absolute;
  top: ${spaces.xl};
  left: ${spaces.xl1};
  ${mq[0]} {
    top: ${spaces.xl2};
    left: ${spaces.xl3};
  }
`;

export const imgWrapper = ({ spaces, colors, radiuses }: Theme) => css`
  margin: ${spaces.xl1} auto ${spaces.xs};
  background-color: ${colors.backgroundLight};
  text-align: center;
  border-radius: ${radiuses.circle};
  & img {
    border-radius: ${radiuses.circle};
    object-fit: cover;
  }
`;

export const inputsWrappper = ({ spaces }: Theme) => css`
  width: 60%;
  & * {
    width: 100%;
    margin: ${spaces.xs} 0;
  }
`;
