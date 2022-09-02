import type { ReactNode } from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export interface PopoverProps {
  trigger: ReactNode | ((params: { isOpen: boolean }) => ReactNode);
  children: (callback: () => void) => ReactNode;
  placement?: PopoverPosition;
  bodyWrapperCssExtend?: Interpolation<Theme>;
  triggerWrapperCssExtend?: Interpolation<Theme>;
}

export type PopoverPosition = 'bottom-left' | 'bottom-right';
