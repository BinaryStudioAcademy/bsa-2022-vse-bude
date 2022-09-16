import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, breakpoints }: Theme) => css`
  max-height: 350px;
  width: 100%;
  margin-bottom: ${spaces.lg};

  @media (max-width: ${breakpoints.xs}px) {
    width: 100%;
    order: -1;
    margin-bottom: ${spaces.md};
  }
`;

export const imageWrapper = css`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const image = css`
  height: 100%;
  max-width: 100%;
  position: relative;
`;

export const numberSlide = ({ colors, radiuses, spaces }: Theme) => css`
  position: absolute;
  right: ${spaces.md};
  bottom: ${spaces.md};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${spaces.xl1};
  width: ${spaces.xl1};
  color: ${colors.textLight};
  border-radius: ${radiuses.circle};
  background-color: ${colors.backgroundLight};
`;

export const current = ({ colors }: Theme) => css`
  color: ${colors.accent};
`;
