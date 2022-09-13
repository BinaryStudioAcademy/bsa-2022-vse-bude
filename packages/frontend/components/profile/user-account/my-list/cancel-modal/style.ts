import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const modalWrapper = css`
  position: relative;
  width: 350px;
`;

export const closeButton = css`
  position: absolute;
  z-index: 2;
  top: -20px;
  right: -20px;
`;

export const inputRow = ({ spaces }: Theme) => css`
  padding-top: ${spaces.md};
  margin-bottom: ${spaces.md};
`;

export const actionButtons = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${spaces.md};
`;
