import type { ReactNode } from 'react';

export interface TooltipProps {
  trigger: ReactNode;
  children: ReactNode;
  hideTimeoutMs?: number;
  refNode?: 'current' | 'parent';
}
