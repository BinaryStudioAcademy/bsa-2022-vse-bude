import { useState } from 'react';
import * as styles from './styles';
import type { PasswordProps } from './types';

export const PasswordInput = ({
  error,
  id,
  label,
  ...props
}: PasswordProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div css={styles.InputWrapper}>
      {label && (
        <label css={styles.StyledLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <div css={styles.ButtonWrapper}>
        <button
          css={styles.ShowBtn}
          type="button"
          onClick={() => setIsShown(!isShown)}
        >
          {/* TODO: remove placeholder */}
          {isShown ? 'H' : 'S'}
        </button>
        <input
          css={styles.StyledInput}
          data-padding-variant={'password'}
          data-status={error ? 'error' : 'successfully'}
          type={isShown ? 'text' : 'password'}
          id={id}
          {...props}
        />
      </div>
      {error && (
        <p css={styles.ErrorMessage}>
          {/* TODO: remove placeholder */}
          <span>!!!!</span>
          {error}
        </p>
      )}
    </div>
  );
};
