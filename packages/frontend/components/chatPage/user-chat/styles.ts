import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const wrapper = ({ spaces, borders, radiuses }: Theme) => css`
    display: flex;
    position: relative;
    margin-top: ${spaces.xl5};
    margin-bottom: ${spaces.xl5};
    border: ${borders.dropdown};
    border-radius: ${radiuses.md};
`;