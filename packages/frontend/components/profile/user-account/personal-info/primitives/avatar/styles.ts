import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const avatar = ({ colors, radiuses }: Theme) => css`
  display: block;
  border-radius: ${radiuses.circle};
  border: 2px solid ${colors.backgroundLight};
  width: 130px;
  height: 130px;
`;
