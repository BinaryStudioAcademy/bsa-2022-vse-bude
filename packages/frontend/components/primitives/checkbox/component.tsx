import { CheckboxProps } from './types';
import * as styles from './styles';

export const Checkbox: React.FC<CheckboxProps> = ({
  labelText,
  defaultChecked,
  onChange,
}) => {
  return (
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
};
