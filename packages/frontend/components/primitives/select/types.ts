import type { Interpolation, Theme } from '@emotion/react';
import type { InputProps } from '../input/types';

export interface SelectProps<T>
  extends Omit<InputProps, 'type' | 'variant' | 'ref'> {
  error?: string;
  options: SelectOption<T>[];
  value: string;
  cssDropdownExtend?: Interpolation<Theme>;
  setValue: (arg0: SelectOption<T>) => void;
}
export type SelectOption<T = string> = {
  value: T;
  title: string;
};
