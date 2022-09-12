import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const wrapper = ({ spaces, borders, radiuses, colors }: Theme) => css`
    position: relative;
    margin-bottom: ${spaces.sm};
    border: ${borders.dropdown};
    border-radius: ${radiuses.sm};
    &[is-active='true']{
        border: 2px solid ${colors.accent};
    }
`;