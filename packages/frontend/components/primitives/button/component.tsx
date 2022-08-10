import * as styles from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  type = 'button',
  variant = 'filled',
  size = 'big',
  onClick,
  children,
  ...props
}: ButtonProps) => (
  <button
    css={styles.button}
    type={type}
    data-variant={variant}
    data-size={size}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
