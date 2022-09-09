import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints, fontSizes }: Theme) => css`
  padding: ${spaces.lg} 0;
  margin-top: ${spaces.xl7};
  a {
    margin-right: ${spaces.lg};
    font-size: ${fontSizes.body1};
    position: relative;
    &:after {
      content: '/';
      position: absolute;
      right: -${spaces.md};
    }
    &:last-child {
      margin-right: 0;
      &:after {
        content: '';
      }
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: ${breakpoints.sm}px) {
    padding: ${spaces.sm} 0;
    a {
      font-size: ${fontSizes.body3};
    }
  }
`;
