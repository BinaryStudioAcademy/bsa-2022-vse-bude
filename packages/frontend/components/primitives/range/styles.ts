import { css, type Theme } from '@emotion/react';

export const globalSliderStyles = ({ colors }: Theme) =>
  css`
    position: relative;
    width: 100%;
    height: 2px;
    max-width: 260px;
    touch-action: none;
    .rc-slider {
      &-rail {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${colors.backgroundLight};
      }
      &-track {
        position: absolute;
        left: 0;
        height: 100%;
        background-color: ${colors.primaryLightHover};
      }
      &-step {
        display: none;
        height: 100%;
      }
      &-handle {
        position: absolute;
        top: -7.5px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: ${colors.backgroundLight};
        cursor: pointer;
        touch-action: pan-x;
        outline: none;

        &:hover {
          &::after {
            transition: all 0.5s ease-in-out;
            transform: scale(1.5);
          }
        } 
        
        &:active {
          cursor: grabbing;
        }

        &::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          background-color: ${colors.backgroundLight};
          opacity: 0.8;
        }
      }
    }
  `;
