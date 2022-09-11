export type FilterButtonProps = {
  name: string;
  onClick(): void;
};

export type CheckboxProps = {
  label: string;
  value: boolean;
  onChange(): void;
};
