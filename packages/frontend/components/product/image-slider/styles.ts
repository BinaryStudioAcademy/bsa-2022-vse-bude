import { css } from '@emotion/react';

export const imageSliderBlock = () => css`
  position: relative;
  height: 300px;
  &:hover .sliderControls {
    visibility: visible;
  }
`;

export const sliderControls = () => css`
  visibility: hidden;
  > span {
    cursor: pointer;
  }
  ,
  > span:first-child {
    position: absolute;
    left: 10px;
    top: 50%;
  }
  ,
  > span:last-child {
    position: absolute;
    right: 10px;
    top: 50%;
  }
`;
