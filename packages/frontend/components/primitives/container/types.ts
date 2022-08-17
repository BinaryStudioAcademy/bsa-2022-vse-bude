import type { Interpolation } from "@emotion/react";
import type { Theme } from "theme";

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  cssExtend?: Interpolation<Theme>
}
