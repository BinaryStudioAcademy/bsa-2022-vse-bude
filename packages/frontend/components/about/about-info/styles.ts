import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const wrapper = ({colors, spaces}: Theme) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
