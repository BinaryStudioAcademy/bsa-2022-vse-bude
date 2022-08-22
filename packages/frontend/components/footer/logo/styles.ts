import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const footerLogo = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.xl};

  ${mq[3]} {
    margin-right: 115px;
  }
`;
