import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const profileWrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl3};
`;

export const fullName = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl};
`;

export const name = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  spaces,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.text};
  &:first-of-type {
    margin-right: ${spaces.sm};
  }
`;

export const networks = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;

export const sectionHeader = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.lg};
  font-size: ${fontSizes.h5};
  line-height: ${lineHeights.h5};
  font-weight: ${fontWeights.h5};
  color: ${colors.text};
`;

export const linkContainer = ({ spaces }: Theme) => css`
  margin-right: ${spaces.lg};
`;
