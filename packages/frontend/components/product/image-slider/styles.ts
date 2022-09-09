import { css } from '@emotion/react';

export const imageSliderBlock = css`
  position: relative;
  height: 300px;
  &:hover .sliderControls {
    visibility: visible;
  }

  img {
    object-fit: cover;
  }
`;

export const sliderControls = css`
  visibility: hidden;
  > span {
    cursor: pointer;
  }

  > span:first-of-type {
    position: absolute;
    left: 10px;
    top: 50%;
  }

  > span:last-of-type {
    position: absolute;
    right: 10px;
    top: 50%;
  }
`;
