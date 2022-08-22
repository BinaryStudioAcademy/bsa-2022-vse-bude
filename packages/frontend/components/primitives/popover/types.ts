import type { ReactNode } from 'react';

export interface PopoverProps {
  trigger: ReactNode;
  children: (callback: ()=> void) => ReactNode;
}
