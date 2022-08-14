import { useOutsideClick } from '@hooks';
import { useCallback, useState } from 'react';
import * as styles from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({ options, ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = useCallback(() => setIsOpen(false), []);

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = async () => {
    setIsOpen(!isOpen);
  };

  return (
    <div {...props}>
      <button css={styles.dropdownTitle} ref={ref} onClick={handleClick}>
        {props.children}
      </button>

      {isOpen && (
        <div css={styles.dropdownContent}>
          {options.map((item) => {
            const { value, key, onClick: callbackFn, disabled } = item;

            const onClick = () => {
              callbackFn();
              handleClick();
            };

            return (
              <button
                key={key || value}
                css={styles.dropdownItem}
                onClick={onClick}
                disabled={disabled}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
