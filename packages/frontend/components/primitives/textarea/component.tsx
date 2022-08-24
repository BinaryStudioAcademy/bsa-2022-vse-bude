import React from 'react';
import * as styles from './styles';
import type { TextareaProps } from './types';

const TextareaInner = ({ id, label, ...props }: TextareaProps, ref) => (
  <div css={styles.textareaWrapper}>
    {label && (
      <label css={styles.label} htmlFor={id}>
        {label}
      </label>
    )}
    <textarea ref={ref} css={styles.textarea} id={id} {...props} />
    <div css={styles.bar}>Tools bar</div>
  </div>
);
export const Textarea = React.forwardRef(TextareaInner);
