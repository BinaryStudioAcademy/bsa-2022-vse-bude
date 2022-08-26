import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const sliderWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  width: 600px;
  height: 300px;

  @media (max-width: ${breakpoints.xxl}px) {
    flex-direction: column;
    height: 400px;
    width: 500px;
    margin-bottom: ${spaces.lg};
  }

  @media (max-width: ${breakpoints.xl}px) {
    height: 350px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    height: 300px;
  }
`;

export const imagesWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: ${spaces.lg};
  width: 100px;

  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    margin-right: 0;
  }
`;

export const image = ({ spaces, breakpoints }: Theme) => css`
  position: relative;
  flex: 1;
  margin-bottom: ${spaces.lg};
  &:last-child {
    margin-bottom: 0;
  }
  transition: 0.6s;

  @media (max-width: ${breakpoints.xxl}px) {
    margin-bottom: 0;
    margin-right: ${spaces.md};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const pickedImage = ({ opacities }: Theme) => css`
  opacity: ${opacities.sm};
`;

export const focusedImage = ({ spaces, breakpoints }: Theme) => css`
  position: relative;
  flex: 1;
  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    order: -1;
    margin-bottom: ${spaces.lg};
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: ${spaces.sm};
  }
`;
