import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const section = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl9};
`;

export const header = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
`;

export const container = ({ maxMq }: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px 26px;
  ${maxMq[5]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${maxMq[3]} {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;
