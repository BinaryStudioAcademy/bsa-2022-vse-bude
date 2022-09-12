import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const wrapper = ({ colors, radiuses }: Theme) => css`
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.backgroundLight};
    height: 60px;
    width: 100%;
    border-radius: 0 ${radiuses.md} 0 0;
`;