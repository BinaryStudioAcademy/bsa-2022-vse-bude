import { css, type Theme } from '@emotion/react';

export const globalStyles = ({ colors }: Theme) =>
  css`
    position: relative;
    touch-action: none;
    width: 100%;
    max-width: 260px;
    height: 2px;
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
        width: 15px;
        height: 15px;
        background-color: ${colors.backgroundLight}; 
        cursor: pointer;
        touch-action: pan-x;
        border-radius: 50%;
        top: -7.5px;
        outline: none;

        &::after{
            position: absolute;
            opacity: 0.8;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: ${colors.backgroundLight};
            content: '';
        }

        &:active {
          cursor: grabbing;
        }
        
        &:hover {
            &::after {
                transition: all 0.5s ease-in-out;
                transform: scale(1.5);
            }
        }
      }
    }`;
