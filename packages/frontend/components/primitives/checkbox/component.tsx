import type { CheckboxProps } from './types';
import * as styles from './styles';

export const Checkbox = ({ label, value, onChange }: CheckboxProps) => (
  <label css={styles.label}>
    <input
      css={styles.checkbox}
      checked={value}
      type="checkbox"
      onChange={() => onChange(!value)}
    />
    {label}
  </label>
);
