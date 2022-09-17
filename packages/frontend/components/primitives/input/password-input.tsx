import React from 'react';
import { useState } from 'react';
import { IconColor, IconName } from '@enums';
import { Icon } from '../icon';
import * as styles from './styles';
import type { PasswordProps } from './types';

const PasswordInputInner = (
  { variant, error, id, label, ...props }: PasswordProps,
  ref,
) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordIcon = passwordVisible ? IconName.EYE : IconName.EYE_SLASH;

  return (
    <div css={styles.inputWrapper}>
      {label && (
        <label data-variant={variant} css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div css={styles.buttonWrapper}>
        <input
          ref={ref}
          css={[styles.input, styles.passwordPadding]}
          data-variant={variant}
          data-status={error ? 'error' : 'successfully'}
          type={passwordVisible ? 'text' : 'password'}
          id={id}
          {...props}
        />
        <button
          css={styles.showBtn}
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            icon={passwordIcon}
            cssExtend={styles.passwordVisibilityIcon}
            color={IconColor.GRAY}
          />
        </button>
      </div>
      {error && <p css={styles.errorMessage}>{error}</p>}
    </div>
  );
};
export const PasswordInput = React.forwardRef(PasswordInputInner);
