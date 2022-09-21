import type { ReactNode } from 'react';
import type { CSSProperties } from 'react';

export interface TooltipProps {
  style?: CSSProperties;
  trigger: ReactNode;
  children: ReactNode;
  hideTimeoutMs?: number;
  refNode?: 'current' | 'parent';
}
