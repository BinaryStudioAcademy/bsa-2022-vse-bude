import React from 'react';
import * as styles from './styles';
import type { TextareaProps } from './types';

const TextareaInner = (
  { id, label, labelRequiredMark, error, ...props }: TextareaProps,
  ref,
) => (
  <div css={styles.textareaWrapper}>
    {label && (
      <label css={styles.label} htmlFor={id}>
        {label}
        {labelRequiredMark && <span>*</span>}
      </label>
    )}
    <textarea
      data-status={error ? 'error' : 'successfully'}
      ref={ref}
      css={styles.textarea}
      id={id}
      {...props}
    />
    {error && <p css={styles.errorMessage}>{error}</p>}
    <div css={styles.bar}>Tools bar</div>
  </div>
);
export const Textarea = React.forwardRef(TextareaInner);
