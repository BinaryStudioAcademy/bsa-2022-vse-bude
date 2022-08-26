import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({
  spaces,
  fontSizes,
  colors,
  fontWeights,
  lineHeights,
  breakpoints,
}: Theme) => css`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: ${spaces.lg};
    &:last-child {
      margin-right: 0;
    }

    span {
      display: block;
      &:first-child {
        font-size: 2.25rem;
        margin-bottom: ${spaces.xs};
        font-family: Roboto, sans-serif;
        font-weight: ${fontWeights.h3};
        line-height: ${lineHeights.h3};
        color: ${colors.secondaryDark};
      }
      &:last-child {
        color: ${colors.textLight};
        font-size: ${fontSizes.body2};
        line-height: ${lineHeights.body2};
      }
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    flex: 1;
  }
`;

export const cell = css``;
