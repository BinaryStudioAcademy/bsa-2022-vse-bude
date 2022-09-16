export interface ButtonGroupProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    'className' | 'style' | 'type'
  > {
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  tooltip?: string;
  buttons: {
    name: string;
    onClick: () => void;
    text: string;
  }[];
  setActive?: (arg0: string) => void;
  active: string;
}
