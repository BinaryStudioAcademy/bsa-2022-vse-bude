import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  margin-left: ${spaces.xl3};
  flex: 1;

  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0;
  }
`;

export const controls = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const favouriteButton = ({ spaces, colors }: Theme) => css`
  color: ${colors.accent};
  margin-left: ${spaces.md};
  width: 45px;
  height: 45px;
`;

export const price = ({ spaces, breakpoints }: Theme) => css`
  margin-bottom: ${spaces.lg};
  @media (max-width: ${breakpoints.md}px) {
    text-align: center;
  }
`;
