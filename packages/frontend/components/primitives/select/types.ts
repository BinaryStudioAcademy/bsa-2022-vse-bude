import type { InputProps } from '../input/types';

export interface SelectProps
  extends Omit<InputProps, 'type' | 'variant' | 'ref'> {
  error?: string;
  options: string[];
  value: string;
  setValue: (arg0: string) => void;
}
