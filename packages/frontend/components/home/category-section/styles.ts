import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const categoryContainer = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl2};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 266px;
  gap: 25px;
`;

export const categoryItem = ({ colors, radiuses }: Theme) => css`
  position: relative;
  background: ${colors.backgroundLight};
  border-radius: ${radiuses.xs};
  overflow: hidden;
  &[data-is-left='true'] {
    grid-column: 1 / 4;
  }
  &[data-is-right='true'] {
    grid-column: 2 / 5;
  }
`;

export const categoryItemTitle = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  position: absolute;
  left: ${spaces.lg};
  top: ${spaces.xl1};
  width: 90%;
  color: ${colors.secondaryDark};
  font-size: ${fontSizes.h5};
  font-weight: ${fontWeights.h5};
  line-height: ${lineHeights.h6};
  z-index: 1;
`;
