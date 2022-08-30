import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const profileWrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl7};
`;

export const cell = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  spaces,
}: Theme) => css`
  padding-bottom: ${spaces.xs};
  font-size: ${fontSizes.cell};
  line-height: ${lineHeights.cell};
  font-weight: ${fontWeights.cell};
  color: ${colors.text};
`;

export const name = ({ spaces }: Theme) => css`
  padding-left: ${spaces.xs};
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
