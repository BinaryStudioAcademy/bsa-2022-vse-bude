import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces, colors, breakpoints }: Theme) => css`
  margin-bottom: ${spaces.xl1};
  padding: ${spaces.xl11} 0;
  background: ${colors.secondaryDark};

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: ${spaces.xl11};
  }
`;

export const title = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
}: Theme) => css`
  color: ${colors.textFooter};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h6};
`;

export const sliderWrapper = ({
  spaces,
  radiuses,
  colors,
  opacities,
  breakpoints,
}: Theme) => css`
  margin-top: ${spaces.xl1};

  @media (min-width: ${breakpoints.md}px) {
    margin-top: ${spaces.xl2};
  }

  .splide__list {
    align-items: center;
  }

  .splide__arrow {
    :disabled {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.lg}px) {
    .splide__arrow--next {
      right: -${spaces.lg};
    }

    .splide__arrow--prev {
      left: -${spaces.lg};
    }
  }

  .splide__arrow--next {
    right: -${spaces.xl};
  }

  .splide__arrow--prev {
    left: -${spaces.xl};
  }

  .splide__pagination {
    bottom: -${spaces.xl};
    .splide__pagination__page {
      width: 40px;
      height: 3px;
      border-radius: ${radiuses.lg};
      background: ${colors.backgroundDark};
      opacity: ${opacities.md};
    }

    .is-active {
      transform: unset;
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    .splide__pagination {
      .splide__pagination__page {
        width: 30px;
      }
    }
  }

  .splide__slide {
    display: flex;
    justify-content: center;
    padding: 0px ${spaces.xs};
  }
`;
