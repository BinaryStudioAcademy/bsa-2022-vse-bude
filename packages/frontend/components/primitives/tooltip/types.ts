import type { ReactNode } from 'react';

interface ITooltipOffset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface TooltipProps {
  children: ReactNode;
  body: ReactNode;
  place?: 'top' | 'right' | 'bottom' | 'left';
  delayHideMs?: number;
  offset?: ITooltipOffset;
}
