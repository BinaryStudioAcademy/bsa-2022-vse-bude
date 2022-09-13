import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const loaderWrapper = ({ spaces }: Theme) => css`
  width: fit-content;
  margin: 0 auto ${spaces.xl3};
`;
