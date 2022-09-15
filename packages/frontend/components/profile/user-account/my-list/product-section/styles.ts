import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const section = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.xl2};
  ${mq[4]} {
    margin-bottom: ${spaces.xl9};
  }
`;

export const header = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.lg};
  ${mq[4]} {
    margin-bottom: ${spaces.xl1};
  }
`;

export const container = ({ maxMq, spaces }: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spaces.xl};
  ${maxMq[5]} {
    gap: ${spaces.md};
  }
`;
