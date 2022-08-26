import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  padding: ${spaces.md} 0;
  margin-top: ${spaces.xl7};
  a {
    margin-right: ${spaces.lg};
    font-size: 1rem;
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
`;
