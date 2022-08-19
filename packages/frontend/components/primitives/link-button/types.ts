export interface LinkButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    'size' | 'className' | 'style' | 'type'
  > {
  size: 'small';
  onClickHook: () => void;
}
