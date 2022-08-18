import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces, colors }: Theme) => css`
  margin-top: ${spaces.xl11};
  padding: ${spaces.xl11} 0;
  background: ${colors.secondaryDark};
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
}: Theme) => css`
  margin-top: ${spaces.xl2};
  .splide__list {
    align-items: center;
  }
  .splide__arrow {
    :disabled {
      display: none;
    }
  }
  .splide__arrow--next {
    right: -${spaces.xl1};
  }
  .splide__arrow--prev {
    left: -${spaces.xl1};
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
`;
