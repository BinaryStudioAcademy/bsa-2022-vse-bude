export interface ColumnHeaderProp {
  children: string;
}

export interface InputBlockProps {
  value: string;
  label: string;
  id: string;
  type: 'email' | 'text';
  name: string;
  autocomplete?: 'on' | 'off';
  placeholder?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
