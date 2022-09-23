import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const sliderWrapper = ({ spaces, breakpoints }: Theme) => css`
  display: flex;
  width: 650px;
  height: 350px;

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
  margin-right: ${spaces.md};
  overflow: auto;
  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    flex-direction: row;
    margin-right: 0;
  }
`;

export const imageWrapper = ({ spaces, breakpoints }: Theme) => css`
  position: relative;
  margin-bottom: ${spaces.md};
  max-width: 120px;
  min-width: 100px;
  max-height: 80px;
  height: 80px;
  &:last-child {
    margin-bottom: 0;
  }
  transition: 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.xxl}px) {
    margin-bottom: 0;
    margin-right: ${spaces.md};

    &:last-child {
      margin-right: 0;
    }
  }

  img {
    object-fit: cover;
  }
`;

export const image = css`
  height: 100%;
  max-width: 100%;
`;

export const pickedImage = ({ opacities, colors }: Theme) => css`
  opacity: ${opacities.sm};
  border: 1px solid ${colors.accent};
`;

export const focusedImageWrapper = ({ spaces, breakpoints }: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-height: 400px;
  transition: 0.6s;
  @media (max-width: ${breakpoints.xxl}px) {
    width: 100%;
    order: -1;
    margin-bottom: ${spaces.md};
  }
  @media (max-width: ${breakpoints.xxl}px) {
    max-height: 320px;
  }
  :hover {
    > div {
      visibility: visible;
    }
  }

  img {
    object-fit: contain;
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
