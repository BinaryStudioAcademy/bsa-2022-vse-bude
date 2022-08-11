import type { FC } from 'react';
import type { CheckboxProps } from './types';
import * as styles from './styles';

export const Checkbox: FC<CheckboxProps> = ({
  labelText,
  defaultChecked,
  onChange,
}) => (
  <div>
    <label css={styles.label}>
      <input
        css={styles.checkbox}
        checked={defaultChecked}
        type="checkbox"
        onChange={onChange}
      />
      {labelText}
    </label>
  </div>
);
