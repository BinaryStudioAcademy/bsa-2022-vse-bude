export interface ButtonGroupProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    'size' | 'className' | 'style' | 'type'
  > {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'danger';
  size?: 'big' | 'small' | 'flexible';
  width?: string;
  tooltip?: string;
  buttons: {
    name: string;
  }[];

  activeDefault?: string;
}
