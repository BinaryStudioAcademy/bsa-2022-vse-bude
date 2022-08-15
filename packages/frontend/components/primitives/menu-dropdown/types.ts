import type { IconProps } from '../icon/types';

export type DropdownProps = {
  children: string | React.ReactNode;
  options: DropdownOptionProps[];
};

export type DropdownOptionProps = {
  value: string;
  onClick: () => void;
  key?: string | number;
  icon?: IconProps;
  disabled?: boolean;
};
