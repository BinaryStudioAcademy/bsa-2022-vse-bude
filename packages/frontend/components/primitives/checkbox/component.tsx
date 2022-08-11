import type { CheckboxProps } from './types';
import * as styles from './styles';

export const Checkbox = ({
  labelText,
  defaultChecked,
  onChange,
}: CheckboxProps) => (
  <label css={styles.label}>
    <input
      css={styles.checkbox}
      checked={defaultChecked}
      type="checkbox"
      onChange={onChange}
    />
    {labelText}
  </label>
);
