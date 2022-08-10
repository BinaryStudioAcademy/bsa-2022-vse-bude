import * as styles from './styles';
import type { InputProps } from './types';

export const Input = ({ error, id, label, type, ...props }: InputProps) => (
  <div css={styles.InputWrapper}>
    {label && (
      <label data-color-style="main" css={styles.StyledLabel} htmlFor={id}>
        {label}
      </label>
    )}
    <input
      css={styles.StyledInput}
      data-padding-variant={'text'}
      data-status={error ? 'error' : 'successfully'}
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
