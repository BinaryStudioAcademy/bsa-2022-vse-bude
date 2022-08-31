import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const lotContainer = ({
  spaces,
  radiuses,
  colors,
  opacities,
  breakpoints,
}: Theme) => css`
  margin-top: ${spaces.xl2};

  @media (min-width: ${breakpoints.md}px) {
    .splide__arrow--next {
      right: -${spaces.xl1};
    }

    .splide__arrow--prev {
      left: -${spaces.xl1};
    }
  }

  .splide__list {
    align-items: center;
  }

  .splide__arrow {
    :disabled {
      display: none;
    }
  }

  .splide__arrow--next {
    right: -${spaces.xl3};
  }

  .splide__arrow--prev {
    left: -${spaces.xl3};
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

  .splide__slide {
    display: flex;
    justify-content: center;
  }
`;
