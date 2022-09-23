import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const footerLogo = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.xl};

  ${mq[3]} {
    margin-right: 90px;
  }
`;
