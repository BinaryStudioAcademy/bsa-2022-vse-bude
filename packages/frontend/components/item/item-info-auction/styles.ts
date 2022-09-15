import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  margin-left: ${spaces.xl3};
  flex: 1;
  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0;
  }
`;

export const favouriteButton = ({ spaces, colors }: Theme) => css`
  color: ${colors.primary};
  width: ${spaces.xl4};
  height: ${spaces.xl4};
`;

export const controls = ({ breakpoints }: Theme) => css`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const editButton = css`
  justify-content: flex-end;
`;

export const inputWrapper = ({
  fontSizes,
  lineHeights,
  spaces,
  colors,
  breakpoints,
}: Theme) => css`
  div:first-of-type {
    margin-bottom: ${spaces.sm};
  }
  span {
    display: block;
    color: ${colors.textLight};
    font-size: ${fontSizes.caption};
    line-height: ${lineHeights.caption};
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: ${spaces.lg};

    div:first-of-type {
      margin-bottom: ${spaces.sm};
    }

    span {
      display: inline;
    }
  }
`;

export const price = ({
  lineHeights,
  fontWeights,
  colors,
  fontSizes,
  breakpoints,
}: Theme) => css`
  span {
    font-size: ${fontSizes.h3};
    line-height: ${lineHeights.h3};
    font-weight: ${fontWeights.h3};
    font-family: Roboto, sans-serif;
    color: ${colors.secondaryDark};
  }

  @media (max-width: ${breakpoints.sm}px) {
    span {
      font-size: ${fontSizes.h4};
    }
  }
`;

export const priceTimerWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.lg};

  @media (max-width: ${breakpoints.xl}px) {
    justify-content: space-around;
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const priceWrapper = ({
  fontSizes,
  lineHeights,
  colors,
  spaces,
  breakpoints,
}: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    color: ${colors.textLight};
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    margin-top: ${spaces.xs};
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    margin-top: ${spaces.sm};
  }
`;

export const buttons = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  align-items: center;
  margin-left: ${spaces.md};
  gap: ${spaces.md};
  @media (max-width: ${breakpoints.md}px) {
    margin-left: 0;
  }
`;

export const sold = ({ colors, fontSizes, fontWeights, spaces }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${colors.accent};
  font-size: ${fontSizes.h6};
  font-weight: ${fontWeights.h6};

  i {
    margin-right: ${spaces.xs};
  }
`;

export const buyBtnWrapper = css`
  margin-left: auto;
`;
