import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const avatar = ({ spaces, radiuses }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spaces.xl2};
  height: ${spaces.xl2};
  border-radius: ${radiuses.circle};
`;

export const name = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  color: ${colors.text};
  font-size: ${fontSizes.toggle};
  font-weight: ${fontWeights.toggle};
  line-height: ${lineHeights.toggle};
`;

export const wrapper = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spaces.sm};
`;
