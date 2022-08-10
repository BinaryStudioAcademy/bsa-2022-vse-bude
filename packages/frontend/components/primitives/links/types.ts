import { LinkProps } from 'next/link';

interface LinkStyleProps {
  variant?: 'primary';
  label?: string | undefined;
  disabled?: boolean;
  title?: string;
}

export interface InternalLinkProps extends LinkStyleProps, LinkProps {}

export interface AnchorProps
  extends LinkStyleProps,
    React.HTMLProps<HTMLAnchorElement> {}
