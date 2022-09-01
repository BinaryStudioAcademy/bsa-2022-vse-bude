import { useOutsideClick } from '@hooks';
import { useCallback, useState } from 'react';
import { Icon } from '@primitives';
import * as styles from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({ options, cssExtend, ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
    props?.onChildrenClick();
  }, [props]);

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = async () => {
    setIsOpen(!isOpen);
    props?.onChildrenClick();
  };

  return (
    <div {...props} css={styles.dropdownWrapper}>
      <button css={styles.dropdownTitle} onClick={handleClick}>
        {props.children}
      </button>

      {isOpen && (
        <div ref={ref} css={[styles.dropdownContent, cssExtend]}>
          {options.map((item) => {
            const {
              value,
              key,
              onClick: callbackFn,
              disabled,
              icon,
              cssExtend: optionCss,
            } = item;

            const onClick = () => {
              callbackFn();
              handleClick();
            };

            return (
              <button
                key={key || value}
                css={[styles.dropdownItem, optionCss]}
                onClick={onClick}
                disabled={disabled}
                data-variant={icon && 'icon'}
              >
                {icon && (
                  <Icon
                    icon={icon.icon}
                    color={icon.color}
                    cssExtend={icon.cssExtend}
                    size={icon.size}
                  />
                )}
                {value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
