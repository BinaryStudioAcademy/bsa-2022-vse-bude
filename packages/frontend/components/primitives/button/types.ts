export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    'size' | 'className' | 'style' | 'type'
  > {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined';
  size?: 'big' | 'small' | 'flexible';
  width?: string;
  tooltip?: string;
}
