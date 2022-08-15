import Link from 'next/link';
import { linkStyles } from './styles';
import type { InternalLinkProps } from './types';

export function InternalLink({
  variant,
  disabled = undefined,
  label,
  passHref = true,
  ...props
}: InternalLinkProps) {
  return (
    <Link passHref={passHref} {...props}>
      <a data-variant={variant} aria-disabled={disabled} css={linkStyles}>
        {label}
      </a>
    </Link>
  );
}
