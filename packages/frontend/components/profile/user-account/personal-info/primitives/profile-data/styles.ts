import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const profileWrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.lg};
`;

export const name = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  spaces,
}: Theme) => css`
  font-size: ${fontSizes.cell};
  line-height: ${lineHeights.cell};
  font-weight: ${fontWeights.cell};
  color: ${colors.text};
  &:first-of-type {
    margin-right: ${spaces.sm};
  }
`;

export const section = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;

export const sectionHeader = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.sm};
  font-size: ${fontSizes.h4};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.text};
`;

export const linkContainer = ({ spaces }: Theme) => css`
  margin-right: ${spaces.lg};
`;
