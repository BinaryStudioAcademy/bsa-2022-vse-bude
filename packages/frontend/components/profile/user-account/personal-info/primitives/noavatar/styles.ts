import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const lettersWrapper = () => css`
  display: flex;
  flex-direction: row;
`;

export const letter = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  display: block;
  font-size: ${fontSizes.h3};
  font-size: ${lineHeights.h3};
  font-weight: ${fontWeights.h6};
  &:first-of-type {
    margin-right: ${spaces.sm};
  }
`;
