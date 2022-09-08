import type { Interpolation, Theme } from '@emotion/react';
import type { LinkProps } from 'next/link';
import type React from 'react';

interface LinkStyleProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'default' | 'button';
  label?: string;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
  cssExtend?: Interpolation<Theme>;
}

export interface InternalLinkProps extends LinkStyleProps, LinkProps {}

export interface AnchorProps
  extends LinkStyleProps,
    React.HTMLProps<HTMLAnchorElement> {}
