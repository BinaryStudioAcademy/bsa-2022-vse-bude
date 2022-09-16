import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const notificationsWrapper = ({ spaces }: Theme) => css`
  min-width: 320px;
  max-height: calc(100vh - ${spaces.xl11});
  padding: ${spaces.sm};
  overflow: auto;
`;
