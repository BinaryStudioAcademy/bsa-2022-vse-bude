export type DropdownProps = {
  children: string;
  options: DropdownOptionProps[];
};

export type DropdownOptionProps = {
  value: string;
  onClick: () => void;
  key?: string | number;
  icon?: string;
  disabled?: boolean;
};
