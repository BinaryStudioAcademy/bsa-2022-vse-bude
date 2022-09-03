import type { ReactNode } from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export interface PopoverProps {
  trigger: ReactNode | ((params: { isOpen: boolean }) => ReactNode);
  children: (callback: () => void) => ReactNode;
  position?: PopoverPosition;
  placement?: PopoverPlacement;
  bodyWrapperCssExtend?: Interpolation<Theme>;
  triggerWrapperCssExtend?: Interpolation<Theme>;
}

export type PopoverPlacement = 'bottom-left' | 'bottom-right';
export type PopoverPosition = 'fixed' | 'absolute';
