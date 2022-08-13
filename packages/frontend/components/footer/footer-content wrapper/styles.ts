import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const logo_links = ({ mq }: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${mq[4]} {
    flex-direction: row;
  }
`;
