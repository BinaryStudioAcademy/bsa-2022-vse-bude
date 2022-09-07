import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const badge = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${theme.spaces.sm};
  padding: ${theme.spaces.sm} ${theme.spaces.md};
  background-color: ${theme.colors.backgroundLight};
  font-size: ${theme.fontSizes.body2};
  font-weight: ${theme.fontWeights.cell};
  border-radius: ${theme.radiuses.lg};
`;

export const cross = (theme: Theme) => css`
  & > i {
    font-size: ${theme.fontSizes.body2} !important;
  }
`;
