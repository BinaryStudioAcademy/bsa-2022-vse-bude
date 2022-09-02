import type { ReactNode } from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export interface PopoverProps {
  trigger: ReactNode | ((params: { isOpen: boolean }) => ReactNode);
  children: (callback: () => void) => ReactNode;
  cssExtend?: Interpolation<Theme>;
}
