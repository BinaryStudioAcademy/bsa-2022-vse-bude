export interface SearchProps extends React.HTMLProps<HTMLButtonElement> {
  value: string;
  setValue: (string) => void;
  onChange: ({ target }: { target: any }) => Promise<void>;
}

export interface PasswordProps extends React.HTMLProps<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  label?: string;
  error?: string;
}

export interface InputProps extends PasswordProps {
  type: 'text' | 'email' | 'number';
  labelRequiredMark?: boolean;
  tooltip?: string;
  inerasableValue?: string;
}

export interface InputDateProps extends Omit<InputProps, 'value' | 'type'> {
  value?: Date;
  setValue?: (string) => void;
}
