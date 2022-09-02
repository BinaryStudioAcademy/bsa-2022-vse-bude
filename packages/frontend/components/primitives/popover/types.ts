import type { ReactNode } from 'react';

export interface PopoverProps {
  trigger: ReactNode | ((params: { isOpen: boolean }) => ReactNode);
  children: (callback: () => void) => ReactNode;
}
