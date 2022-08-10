export interface ISearchInput extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  autocomplete?: string;
  placeholder?: string;
  value?: string;
}
export interface IPasswordInput extends ISearchInput {
  label?: string;
  error?: string;
}

export interface IInput extends ISearchInput {
  type: 'text' | 'email';
  label?: string;
  error?: string;
}
