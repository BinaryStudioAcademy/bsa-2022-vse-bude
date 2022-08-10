import { linkStyles } from './styles';
import { AnchorProps } from './types';

export function AnchorLink({
  variant,
  disabled = undefined,
  label,
  target = '_blank',
  ...props
}: AnchorProps) {
  return (
    <a
      data-variant={variant}
      aria-disable={disabled}
      target={target}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
      css={linkStyles}
      {...props}
    >
      {label}
    </a>
  );
}
