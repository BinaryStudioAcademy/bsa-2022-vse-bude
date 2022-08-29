import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const container = () => css`
  position: absolute;
  bottom: -1px;
  right: -1px;
`;

export const downloadWrapper = ({ colors }: Theme) => css`
  position: relative;
  z-index: 1;
  display: inline-block;
  border-radius: 50%;
  background: ${colors.backgroundLight};
  cursor: pointer;
  &:hover {
    transition: all 1s ease;
    background: ${colors.backgroundDark};
  }
`;

export const downloadIcon = () => css`
  position: absolute;
  top: calc(50% - 9.25px);
  left: calc(50% - 9px);
`;
