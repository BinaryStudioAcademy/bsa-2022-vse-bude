import Link from 'next/link';
import { linkStyles } from './styles';
import { InternalLinkProps } from './types';

export function InnerLink({
  variant,
  disabled = undefined,
  label,
  passHref = true,
  ...props
}: InternalLinkProps) {
  return (
    <Link passHref={passHref} {...props}>
      <a data-variant={variant} aria-disable={disabled} css={linkStyles}>
        {label}
      </a>
    </Link>
  );
}
