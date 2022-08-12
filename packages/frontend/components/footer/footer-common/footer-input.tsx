import type { FC } from 'react';
import type { InputBlockProps } from './types';
import * as styles from './styles';

export const FooterInput: FC<InputBlockProps> = ({
  id,
  label,
  name,
  type,
  value,
  placeholder,
  autocomplete,
  onChange,
}) => (
  <label htmlFor={id}>
    <span css={styles.footerLabel}>{label}</span>
    <input
      css={styles.footerInput}
      value={value}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete}
      onChange={onChange}
    />
  </label>
);
