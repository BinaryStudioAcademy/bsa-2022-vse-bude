import React from 'react';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import type { PasswordProps } from './types';

const PasswordInputInner = (
  { variant, error, id, label, ...props }: PasswordProps,
  ref,
) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordIcon = passwordVisible ? faEye : faEyeSlash;

  return (
    <div css={styles.inputWrapper}>
      {label && (
        <label data-variant={variant} css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div css={styles.buttonWrapper}>
        <button
          css={styles.showBtn}
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <FontAwesomeIcon
            icon={passwordIcon}
            css={styles.passwordVisibilityIcon}
          />
        </button>
        <input
          ref={ref}
          css={[styles.input, styles.passwordPadding]}
          data-variant={variant}
          data-status={error ? 'error' : 'successfully'}
          type={passwordVisible ? 'text' : 'password'}
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
export const PasswordInput = React.forwardRef(PasswordInputInner);
