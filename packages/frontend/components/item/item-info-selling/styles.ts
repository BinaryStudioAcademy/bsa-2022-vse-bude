import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  margin-left: ${spaces.xl3};
  flex: 1;

  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0;
    min-width: 70%;
  }

  @media (max-width: ${breakpoints.lg}px) {
    min-width: 100%;
  }
`;

export const controls = ({ spaces }: Theme) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${spaces.md};
`;

export const favouriteButton = ({ spaces, colors }: Theme) => css`
  color: ${colors.primary};
  width: ${spaces.xl4};
  height: ${spaces.xl4};
`;

export const price = ({ spaces, breakpoints }: Theme) => css`
  margin-bottom: ${spaces.lg};
  @media (max-width: ${breakpoints.md}px) {
    text-align: center;
  }
`;
