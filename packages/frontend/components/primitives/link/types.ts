import type { LinkProps } from 'next/link';

interface LinkStyleProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'dashboard' | 'default';
  label?: string;
  disabled?: boolean;
  title?: string;
}

export interface InternalLinkProps extends LinkStyleProps, LinkProps {}

export interface AnchorProps
  extends LinkStyleProps,
    React.HTMLProps<HTMLAnchorElement> {}
