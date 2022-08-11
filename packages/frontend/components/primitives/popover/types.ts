import type { ReactNode } from 'react';

export interface PopoverProps {
  body: ReactNode;
  children: ReactNode;
}

export interface PopoverState {
  visible: boolean;
}
