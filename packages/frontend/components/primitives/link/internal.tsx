import Link from 'next/link';
import { linkStyles } from './styles';
import type { InternalLinkProps } from './types';

export function InternalLink({
  variant = 'primary',
  disabled = undefined,
  label,
  passHref = true,
  children,
  cssExtend,
  ...props
}: InternalLinkProps) {
  return (
    <Link passHref={passHref} {...props}>
      <a
        data-variant={variant}
        aria-disabled={disabled}
        css={[linkStyles, cssExtend]}
      >
        {label || children}
      </a>
    </Link>
  );
}
