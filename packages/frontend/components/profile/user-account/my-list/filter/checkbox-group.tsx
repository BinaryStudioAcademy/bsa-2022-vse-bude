import { Checkbox } from '@components/primitives';
import type { CheckboxProps } from './types';
import * as styles from './styles';

export const CheckboxGroup = ({
  checkboxes,
}: {
  checkboxes: CheckboxProps[];
}) => (
    <div>
      {checkboxes.map((elemProp, idx) => {
        const { label, value, onChange } = elemProp;
        
return (
          <div key={idx + elemProp.label + idx} css={styles.checkboxContainer}>
            <Checkbox value={value} label={label} onChange={onChange} />
          </div>
        );
      })}
    </div>
  );
