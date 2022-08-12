import { useOutsideClick } from '@hooks';
import { useState } from 'react';
import * as styles from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({ options, ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div {...props}>
      <button css={styles.dropdownTitle} onClick={toggleMenu}>
        {props.children}
      </button>

      {isOpen && (
        <div css={styles.dropdownContent} ref={ref}>
          {options.map((item) => {
            const { value, key, onClick: callbackFn, disabled } = item;

            const onClick = () => {
              callbackFn();
              toggleMenu();
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
