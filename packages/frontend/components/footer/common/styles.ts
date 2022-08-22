import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const columnHeader = ({
  fontSizes,
  lineHeights,
  colors,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.h5};
  line-height: ${lineHeights.h5};
  font-weight: ${fontWeights.h6};
  color: ${colors.textFooter};
`;
