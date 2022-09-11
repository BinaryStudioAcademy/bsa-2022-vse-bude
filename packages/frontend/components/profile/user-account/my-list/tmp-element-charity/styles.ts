import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const charityWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const logoWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const logo = css`
  display: block;
  width: 29px;
  height: 25px;
`;

export const nameWrapper = css``;

export const name = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  font-weight: ${fontWeights.tub};
  color: ${colors.text};
`;
