import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const footerContentWrapper = ({ mq }: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${mq[1]} {
    flex-direction: row;
  }
`;

export const links = ({ mq }: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${mq[4]} {
    flex-direction: row;
  }
`;
