import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const dropdown = css`
  top: 100%;
  z-index: 2;
  width: 100%;
`;

export const option = ({ fontSizes, lineHeights }: Theme) => css`
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
`;

export const dropdownError = ({ spaces }: Theme) => css`
  top: calc(100% - ${spaces.md});
`;

export const inputWrapper = css`
  position: relative;
  width: 100%;
  text-align: left;
`;

export const dropdownArrow = ({ spaces }: Theme) => css`
  position: absolute;
  right: ${spaces.md};
  bottom: ${spaces.md};
`;

export const dropdownArrowError = ({ spaces }: Theme) => css`
  bottom: ${spaces.xl1};
`;
