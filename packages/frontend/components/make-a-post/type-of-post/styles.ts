import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const innerWrapper = ({ spaces, mq }: Theme) => css`
  width: 90vw;
  max-width: 915px;
  padding: ${spaces.xl2} ${spaces.md} 50px;
  ${mq[0]} {
    padding: ${spaces.xl9} ${spaces.xl9} 120px;
  }
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
  margin-bottom: ${spaces.xl11};
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
export const imgWrapper = ({ spaces }: Theme) => css`
  margin: 0 auto ${spaces.xl3};
  text-align: center;
`;
