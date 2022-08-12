import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const trigger = () => css`
  cursor: pointer;
  color: black;
  display: block;
  border: 1px solid black;
`;

export const body = ({ colors, spaces }: Theme) => css`
  position: absolute;
  visibility: hidden;
  max-width: 50%;
  overflow: hidden;
  background-color: ${colors.background};
  border-radius: ${spaces.xs};
  padding: ${spaces.sm};
  border: 1px solid black;
  color: black;
`;
