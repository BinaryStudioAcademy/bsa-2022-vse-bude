import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const wrapper = ({ spaces, borders }: Theme) => css`
    padding: ${spaces.xl1} ${spaces.xl};
    border-right: ${borders.dropdown};
`;