import { ColorPalette } from '@vse-bude/shared';
import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const productFooter = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  & .productPrice {
    margin-bottom: 10px;
  }
`;

export const productHeader = css`
  position: relative;
  margin-bottom: 20px;
  user-select: none;
`;

export const productName = ({ fontWeights, fontSizes }: Theme) => css`
  color: ${ColorPalette.BLACK_100};
  font-weight: ${fontWeights.h6};
  font-size: ${fontSizes.h6};
  margin-bottom: 5px;
`;

export const productDescription = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  margin-bottom: 15px;
  color: ${colors.text};
  font-size: ${fontSizes.body2};
  font-weight: ${fontWeights.body2};
  line-height: ${lineHeights.body2};
  word-break: break-all;
  min-height: ${2*/\d+/.exec(lineHeights.body2)}px;
`;

export const divider = ({ colors }: Theme) => css`
  border: 1px solid ${colors.disabled};
`;

export const productTimer = css`
  position: absolute;
  bottom: -15px;
  left: 16%;
`;

export const productCard = ({
  spaces,
  colors,
  radiuses,
  breakpoints,
}: Theme) => css`
  border: 1px solid transparent;
  padding: ${spaces.lg} ${spaces.xl};
  border-radius: ${radiuses.xs};
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    padding: ${spaces.sm} ${spaces.md};
  }

  &:hover {
    border: 1px solid ${colors.accent};
  }
`;
