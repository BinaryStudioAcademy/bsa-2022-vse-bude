export type FilterButtonProps = {
  name: string;
  onClick(): void;
};

export type CheckboxProps = {
  label: string;
  value: boolean;
  onChange(): void;
};

export type FilterStatuses = {
  all: boolean;
  purchased: boolean;
  sold: boolean;
  posted: boolean;
  draft: boolean;
  archived: boolean;
};
