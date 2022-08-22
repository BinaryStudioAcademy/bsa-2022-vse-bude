import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const price = ({ colors, fontSizes }: Theme) => css`
  color: ${colors.text};
  font-weight: 800;
  font-size: ${fontSizes.h4};
`;
