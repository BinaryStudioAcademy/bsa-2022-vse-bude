import { DownArrow } from '@components/header/profile-info/sub-components/dropdown';
import { useState } from 'react';
import { Input } from '../input';
import { Dropdown } from '../menu-dropdown';
import type { SelectProps } from './types';
import * as styles from './styles';

export function Select<T>({
  options,
  error,
  value = '',
  setValue,
  ...props
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      cssExtend={
        error ? [styles.dropdown, styles.dropdownError] : [styles.dropdown]
      }
      onChildrenClick={() => setIsOpen(!isOpen)}
      options={options.map((item) => ({
        value: item.title,
        onClick: () => setValue(item),
      }))}
    >
      <div css={styles.inputWrapper}>
        <Input
          type="text"
          variant="primary"
          disabled
          value={value}
          error={error}
          {...props}
        />
        <DownArrow
          style={
            error
              ? [styles.dropdownArrow, styles.dropdownArrowError]
              : [styles.dropdownArrow]
          }
          isOpen={isOpen}
        />
      </div>
    </Dropdown>
  );
}
