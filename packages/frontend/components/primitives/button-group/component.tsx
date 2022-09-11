import { useState } from 'react';
import * as styles from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
  buttons,
  activeDefault,
  variant = 'rectangle',
  size = 'small',
  ...props
}: ButtonGroupProps) => {
  const [activeId, setActiveId] = useState(activeDefault ?? buttons.at(0).name);

  return (
    <div css={styles.wrapper}>
      {buttons.map((button, idx) => (
        <button
          css={styles.button}
          data-variant={variant}
          data-size={size}
          style={{ width: props.width }}
          key={idx + button.name + idx}
          data-selected={activeId === button.name ? 'selected' : 'default'}
          onClick={() => {
            setActiveId(button.name);
            button.onClick();
          }}
          {...props}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};
