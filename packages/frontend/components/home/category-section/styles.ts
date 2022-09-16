import { SplideSlide } from '@splidejs/react-splide';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const categoryContainer = ({ spaces, breakpoints }: Theme) => css`
  margin-top: ${spaces.md};

  @media (min-width: ${breakpoints.sm}px) {
    margin-top: ${spaces.xl1};
  }
  @media (min-width: ${breakpoints.md}px) {
    margin-top: ${spaces.xl2};
  }

  @media (min-width: ${breakpoints.xl}px) {
    .splide__list {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 266px;
      gap: ${spaces.xl};
    }
  }
`;

export const categoryItem = ({
  colors,
  radiuses,
  breakpoints,
  spaces,
}: Theme) => css`
  display: block;
  padding: ${spaces.md};
  width: 92px;
  height: 110px;
  position: relative;
  background: ${colors.backgroundLight};
  border-radius: ${radiuses.xs};
  overflow: hidden;
  text-decoration: none;

  @media (min-width: ${breakpoints.md}px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    padding: ${spaces.xl5};
    width: 100%;
    height: 100%;
  }
`;

export const categoryItemTitle = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
  breakpoints,
}: Theme) => css`
  max-width: 90%;
  color: ${colors.secondaryDark};
  font-size: ${fontSizes.label};
  font-weight: ${fontWeights.toggle};
  line-height: ${lineHeights.toggle};
  text-align: center;
  margin-bottom: ${spaces.sm};

  @media (min-width: ${breakpoints.md}px) {
    text-align: left;
    font-size: ${fontSizes.h5};
    font-weight: ${fontWeights.h5};
    line-height: ${lineHeights.h6};
  }

  @media (min-width: ${breakpoints.xl}px) {
    position: absolute;
    left: ${spaces.lg};
    top: ${spaces.xl1};
    z-index: 1;
  }
`;

export const imageWrapper = ({ breakpoints }: Theme) => css`
  position: relative;
  height: 90%;
  width: 90%;

  img {
    object-fit: scale-down;
  }

  @media (min-width: ${breakpoints.xl}px) {
    height: 100%;
    width: 100%;
  }
`;

export const SplideSlideStyled = styled(SplideSlide)`
  &:nth-of-type(1) {
    grid-column: 1 / 4;
  }
  &:nth-of-type(4) {
    grid-column: 2 / 5;
  }
`;
