import type { ReactNode } from 'react';

export interface StyledRangeProps {
  min: number;
  max: number;
  value: number[];
  handleChange: (value: number[]) => void;
  ref?: ReactNode | any;
}
