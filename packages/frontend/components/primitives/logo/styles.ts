import { css } from '@emotion/react';
import type { Theme } from 'theme';
import logoSVG from '../../../public/images/icons/logo.svg';

export const logo = (theme: Theme) => css`
  display: block;
  width: ${theme.widths.logo};
  height: ${theme.heights.logo};
  background-image: url(${logoSVG.src});
  background-size: cover;
`;
