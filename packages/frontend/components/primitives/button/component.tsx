import { Tooltip } from '../tooltip';
import * as styles from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  type = 'button',
  variant = 'filled',
  size = 'big',
  onClick,
  tooltip = '',
  children,
  ...props
}: ButtonProps) => (
  <Tooltip
    style={{ cursor: 'pointer' }}
    trigger={
      <button
        css={styles.button}
        style={{ width: props.width }}
        type={type}
        data-variant={variant}
        data-size={size}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    }
  >
    {tooltip}
  </Tooltip>
);
