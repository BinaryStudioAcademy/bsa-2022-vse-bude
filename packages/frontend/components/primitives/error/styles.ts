import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

export const error = (theme: Theme) => css`
  color: ${theme.colors.error};
  font-weight: ${theme.fontWeights.h4};
  margin: 10px 0 0 0;
  font-size: ${theme.fontSizes.caption};
`;
