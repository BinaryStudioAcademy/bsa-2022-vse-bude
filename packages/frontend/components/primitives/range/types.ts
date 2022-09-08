import type { ReactNode } from 'react';

export interface StyledRangeProps {
  allowCross: boolean;
  min: number;
  max: number;
  value: number[];
  handleChange: (value: number) => void;
  ref?: ReactNode | any;
}
