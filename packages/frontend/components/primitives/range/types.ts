import type { ReactNode } from 'react';

export interface StyledRangeProps {
  allowCross: boolean;
  value: number[];
  handleChange: (value: number) => void;
  ref?: ReactNode | any;
}
