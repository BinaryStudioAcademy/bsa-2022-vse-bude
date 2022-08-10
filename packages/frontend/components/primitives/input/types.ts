export interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (string) => void;
}

export interface PasswordProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface InputProps extends PasswordProps {
  type: 'text' | 'email';
}
