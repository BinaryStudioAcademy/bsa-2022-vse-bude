import { css, type Theme } from "@emotion/react";

export const globalStyles = ({ colors }: Theme) => 

     css`
        position: absolute;
        z-index: 100;
        touch-action: none;
        width: 100%;
        height: 4px;
        touch-action: none;
        .rc-slider {
            &-rail {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: transparent;
            }
            &-track {
                position: absolute;
                left: 0;
                height: 100%;
                background-color: ${colors.primary};
                
            }
            &-step {
                display: none;
            }
            &-handle {
                position: absolute;
                height: 100%;
                outline: none;
        }
    }
    `;