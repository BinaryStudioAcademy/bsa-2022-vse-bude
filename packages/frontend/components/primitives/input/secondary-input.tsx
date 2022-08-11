import React from 'react';
import * as styles from './styles';
import type { InputProps } from './types';

const SecondaryInputInner = (
  { error, id, label, type, ...props }: InputProps,
  ref,
) => (
  <div css={styles.inputWrapper}>
    {label && (
      <label data-variant="footer" css={styles.label} htmlFor={id}>
        {label}
      </label>
    )}
    <input
      ref={ref}
      css={styles.input}
      data-status={error ? 'error' : 'successfully'}
      data-variant="footer"
      type={type}
      id={id}
      {...props}
    />
    {error && (
      <p css={styles.errorMessage}>
        {/* TODO: remove placeholder */}
        <span>!!!!</span>
        {error}
      </p>
    )}
  </div>
);
export const SecondaryInput = React.forwardRef(SecondaryInputInner);
