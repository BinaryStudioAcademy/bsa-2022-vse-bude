export interface SearchProps extends React.HTMLProps<HTMLButtonElement> {
  value: string;
  setValue: (string) => void;
}

export interface PasswordProps extends React.HTMLProps<HTMLButtonElement> {
  variant: "primary" | "secondary";
  label?: string;
  error?: string;
}

export interface InputProps extends PasswordProps {
  type: 'text' | 'email';
}
