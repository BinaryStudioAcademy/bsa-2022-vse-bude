import type { ReactNode } from 'react';

export interface StyledRangeProps {
  allowCross: boolean;
  handle: ReactNode;
  value: number[];
  handleChange: (value: number) => void;
  ref?: ReactNode;
}
