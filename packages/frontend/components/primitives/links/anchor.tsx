import { linkStyles } from './styles';
import type { AnchorProps } from './types';

export function Anchor({
  variant,
  disabled = false,
  label,
  target = '_blank',
  ...props
}: AnchorProps) {
  return (
    <a
      data-variant={variant}
      aria-disabled={disabled}
      target={target}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
      css={linkStyles}
      {...props}
    >
      {label}
    </a>
  );
}
