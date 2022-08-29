import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces }: Theme) => css`
  height: 250px;
  width: 100%;
  margin-bottom: ${spaces.lg};
`;

export const imageWrapper = css`
  height: 250px;
  width: 100%;
  position: relative;
`;

export const numberSlide = ({ colors }: Theme) => css`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: ${colors.textLight};
`;

export const current = ({ colors }: Theme) => css`
  color: ${colors.accent};
`;
