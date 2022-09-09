import { useState } from 'react';
import * as styles from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
  buttons,
  activeDefault,
  ...props
}: ButtonGroupProps) => {
  const [activeId, setActiveId] = useState(activeDefault ?? buttons.at(0).name);

  return (
    <div css={styles.wrapper}>
      {buttons.map((button) => (
        <button
          css={styles.button}
          style={{ width: props.width }}
          key={button.name}
          data-selected={activeId === button.name ? 'selected' : 'default'}
          onClick={() => {
            setActiveId(button.name);
            button.onClick();
          }}
          {...props}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
