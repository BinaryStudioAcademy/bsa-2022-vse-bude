import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const productGridWrapper = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const productGrid = ({ spaces }: Theme) => css`
  flex: 1;
  display: grid;
  grid-gap: ${spaces.sm};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: ${spaces.lg} ${spaces.xl11};

  & li {
    list-style: none;
  }
`;
