import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const itemWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  margin-bottom: ${spaces.xl11};

  .desktop-gallery-wrapper,
  .mobile-gallery-wrapper {
    display: contents;
  }

  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.sm}px) {
    .desktop-gallery-wrapper {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.sm + 1}px) {
    .mobile-gallery-wrapper {
      display: none;
    }
  }
`;
