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
    height: 400px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

export const imagesWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: ${spaces.lg};
  overflow: auto;
  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    flex-direction: row;
    margin-right: 0;
  }
`;

export const image = ({ spaces, breakpoints }: Theme) => css`
  position: relative;
  margin-bottom: ${spaces.lg};
  min-width: 120px;
  min-height: 80px;
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
  transition: 0.6s;
  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    order: -1;
    margin-bottom: ${spaces.lg};
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: ${spaces.sm};
  }
  :hover {
    > div {
      visibility: visible;
    }
  }
`;

export const seeImageCaption = ({
  opacities,
  colors,
  fontSizes,
  fontWeights,
}: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  z-index: 1;
  transition: ease all 0.4s;
  background-color: ${colors.extraDark};
  color: ${colors.textLight};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  opacity: ${opacities.sm};
  cursor: pointer;
`;

export const modalImageWrapper = css`
  max-width: 100vw;
  max-height: 70vh;
  position: relative;
`;

export const modalImage = css`
  display: block;
  width: 100%;
  max-height: inherit;
`;

export const modalClose = ({ spaces }: Theme) => css`
  position: absolute;
  top: ${spaces.md};
  right: ${spaces.md};
`;
