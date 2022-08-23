import type { Interpolation } from '@emotion/react';
import type { Theme } from '@emotion/react';

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  cssExtend?: Interpolation<Theme>;
}
