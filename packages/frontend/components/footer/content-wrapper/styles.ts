import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = css`
  justify-content: space-between;
`;

export const logoLinks = ({ mq }: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${mq[4]} {
    flex-direction: row;
  }
`;
