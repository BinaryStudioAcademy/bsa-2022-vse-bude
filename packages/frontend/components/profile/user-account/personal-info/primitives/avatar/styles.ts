import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const avatar = ({ radiuses }: Theme) => css`
  display: block;
  border-radius: ${radiuses.circle};
  width: 130px;
  height: 130px;
`;
