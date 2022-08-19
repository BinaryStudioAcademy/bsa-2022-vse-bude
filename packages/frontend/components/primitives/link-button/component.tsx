import { resendCodeBtn } from './styles';
import type { LinkButtonProps } from './types';

export const LinkButton = ({
  onClickHook,
  children,
  size,
}: LinkButtonProps) => (
  <button css={resendCodeBtn} onClick={onClickHook} data-size={size}>
    {children}
  </button>
);
