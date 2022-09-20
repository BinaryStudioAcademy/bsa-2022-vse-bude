import { useOutsideClick, useWindowSize } from '@hooks';
import { useCallback, useState } from 'react';
import { Icon } from '@primitives';
import * as styles from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({
  options,
  cssExtend,
  onChildrenClick,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  const handleClickOutside = useCallback(() => {
    event.stopPropagation();
    setIsOpen(false);
    onChildrenClick?.();
  }, [onChildrenClick]);

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = async (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    onChildrenClick?.();
  };

  return (
    <div {...props} css={styles.dropdownWrapper}>
      <button css={styles.dropdownTitle} onClick={handleClick}>
        {props.children}
      </button>

      {isOpen && (
        <div
          ref={ref}
          css={[styles.dropdownContent, cssExtend]}
          style={
            size.height < 600 && options.length > 10
              ? { maxHeight: '400px', overflowY: 'hidden' }
              : {}
          }
        >
          <div
            style={
              size.height < 600 && options.length > 10
                ? { overflowY: 'scroll' }
                : {}
            }
          >
            {options.map((item) => {
              const {
                value,
                key,
                onClick: callbackFn,
                disabled,
                icon,
                cssExtend: optionCss,
              } = item;

              const onClick = (e) => {
                callbackFn();
                handleClick(e);
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
        </div>
      )}
    </div>
  );
};
