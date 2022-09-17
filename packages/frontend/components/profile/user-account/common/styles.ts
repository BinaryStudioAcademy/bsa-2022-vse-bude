import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const sectionHeaderWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;

export const sectionHeader = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.text};
`;

export const nestedLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
