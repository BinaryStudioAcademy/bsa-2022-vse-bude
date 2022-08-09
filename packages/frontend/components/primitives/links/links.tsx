import Link from 'next/link';
import React from 'react';
import { InnerLinkProps, AnchorProps } from './types';
import { styled } from '@nextui-org/react';

const StyledLink = styled('a', {
  color: 'blue',
  textDecoration: 'none',
  fontFamily: 'arial',
  fontSize: '20px',
  fontWeight: 'normal',
});

export function InnerLink(props: InnerLinkProps) {
  const { variant, disabled, label, passHref = true, ...rest } = props;
  return (
    <Link passHref={passHref} {...rest}>
      <StyledLink data-variant={variant} aria-disable={disabled}>
        {label}
      </StyledLink>
    </Link>
  );
}

export function AnchorLink(props: AnchorProps) {
  const {
    variant = 'ancorlLink',
    disabled = undefined,
    target = '_blank',
    label,
    // ...rest
  } = props;
  return (
    <StyledLink
      data-variant={variant}
      aria-disable={disabled}
      target={target}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
      // {...rest}
    >
      {label}
    </StyledLink>
  );
}
