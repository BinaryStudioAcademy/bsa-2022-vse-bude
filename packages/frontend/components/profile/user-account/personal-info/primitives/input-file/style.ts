import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const download = ({ radiuses, heights, widths }: Theme) => css`
  visibility: hidden;
  width: ${widths.download};
  height: ${heights.download};
  border-radius: ${radiuses.circle};
  cursor: pointer;
  color: transparent;
`;
