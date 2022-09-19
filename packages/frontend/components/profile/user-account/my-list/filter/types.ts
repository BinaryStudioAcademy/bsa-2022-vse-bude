export type FilterButtonProps = {
  name: string;
  text: string;
  onClick(): void;
};

export type CheckboxProps = {
  label: string;
  value: boolean;
  type: 'status';
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
