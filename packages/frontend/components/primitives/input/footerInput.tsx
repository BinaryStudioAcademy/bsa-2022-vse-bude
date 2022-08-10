import * as styles from './styles';
import type { InputProps } from './types';

export const FooterInput = ({
  error,
  id,
  label,
  type,
  ...props
}: InputProps) => (
  <div css={styles.InputWrapper}>
    {label && <label data-color-style='footer' css={styles.StyledLabel} htmlFor={id}>{label}</label>}
    <input
      css={styles.StyledInput}
      data-padding-variant={"text"}
      data-status={error ? "error" : 'successfully'}
      data-color-style='footer'
      type={type}
      id={id}
      {...props}
    />
    {error && (
      <p css={styles.ErrorMessage}>
        {/* TODO: remove placeholder */}
        <span>!!!!</span>
        {error}
      </p>
    )}
  </div>
);
