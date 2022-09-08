import type { InputProps } from '../input/types';

export interface SelectProps
  extends Omit<InputProps, 'type' | 'variant' | 'ref'> {
  error?: string;
  options: SelectOption[];
  value: string;
  setValue: (arg0: SelectOption) => void;
}
export type SelectOption = {
  value: string;
  title: string;
};
