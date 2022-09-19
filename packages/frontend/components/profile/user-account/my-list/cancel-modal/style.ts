import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const modalWrapper = css`
  position: relative;
  width: 350px;
`;

export const modalHeader = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  margin-bottom: ${spaces.xs};
`;

export const header = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.modal};
  color: ${colors.text};
`;

export const closeButton = css`
  position: absolute;
  z-index: 2;
  top: -20px;
  right: -20px;
`;

export const actionButtons = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${spaces.md};
`;
