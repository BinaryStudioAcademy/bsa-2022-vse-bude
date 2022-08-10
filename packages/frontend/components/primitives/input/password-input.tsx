import React from 'react';
import { useState } from 'react';
import * as styles from './styles';
import type { PasswordProps } from './types';

const Component = ({ error, id, label, ...props }: PasswordProps, ref) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div css={styles.inputWrapper}>
      {label && (
        <label css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div css={styles.buttonWrapper}>
        <button
          css={styles.showBtn}
          type="button"
          onClick={() => setIsShown(!isShown)}
        >
          {/* TODO: remove placeholder */}
          {isShown ? 'H' : 'S'}
        </button>
        <input
          ref={ref}
          css={[styles.input, styles.passwordPadding]}
          data-status={error ? 'error' : 'successfully'}
          type={isShown ? 'text' : 'password'}
          id={id}
          {...props}
        />
      </div>
      {error && (
        <p css={styles.errorMessage}>
          {/* TODO: remove placeholder */}
          <span>!!!!</span>
          {error}
        </p>
      )}
    </div>
  );
};

export const PasswordInput = React.forwardRef(Component);
