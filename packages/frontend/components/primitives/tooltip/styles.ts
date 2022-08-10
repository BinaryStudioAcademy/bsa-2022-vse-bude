import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const tooltipTrigger = () => css`
  cursor: pointer;
`;

export const tooltip = ({ colors, spaces }: Theme) => css`
  background-color: ${colors.background} !important;
  border-radius: ${spaces.xs} !important;
  padding: ${spaces.sm} !important;
  opacity: 1 !important;
  &::before,
  &::after {
    border: none !important;
  }
`;
