import { SplideSlide } from '@splidejs/react-splide';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import styled from '@emotion/styled';

export const categoryContainer = ({ spaces, breakpoints }: Theme) => css`
  margin-top: ${spaces.xl1};
  @media (min-width: ${breakpoints.md}px) {
    margin-top: ${spaces.xl2};
  }

  @media (min-width: ${breakpoints.xl}px) {
    .splide__list {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 266px;
      gap: 25px;
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
    max-width: 200px;
    z-index: 1;
  }
`;

export const imageWrapper = () => css`
  position: relative;
  height: 100%;
`;

export const SplideSlideStyled = styled(SplideSlide)`
  grid-column: ${(p) =>
    p['data-is-left'] ? '1 / 4' : p['data-is-right'] ? '2 / 5' : 'unset'};
`;
