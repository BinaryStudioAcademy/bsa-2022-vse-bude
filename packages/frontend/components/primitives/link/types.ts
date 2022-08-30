import type { LinkProps } from 'next/link';
import type React from 'react';

interface LinkStyleProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'dashboard' | 'default';
  label?: string;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
}

export interface InternalLinkProps extends LinkStyleProps, LinkProps {}

export interface AnchorProps
  extends LinkStyleProps,
    React.HTMLProps<HTMLAnchorElement> {}
