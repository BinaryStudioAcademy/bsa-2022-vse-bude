import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const itemWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  margin-bottom: ${spaces.xl11};
  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
