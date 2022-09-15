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

export const controls = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const favouriteButton = ({ spaces, colors }: Theme) => css`
  color: ${colors.primary};
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

export const sold = ({ colors, fontSizes, fontWeights, spaces }: Theme) => css`
  display: flex;
  align-items: center;
  color: ${colors.accent};
  font-size: ${fontSizes.h6};
  font-weight: ${fontWeights.h6};

  i {
    margin-right: ${spaces.xs};
  }
`;
