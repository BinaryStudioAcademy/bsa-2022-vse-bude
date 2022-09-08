import { Container } from '@primitives';
import { useState } from 'react';
import * as styles from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
  size = 'big',
  buttons,
  activeDefault,
  ...props
}: ButtonGroupProps) => {
  const [active, setActive] = useState(
    activeDefault ? activeDefault : buttons.at(0).name,
  );

  return (
    <Container>
      {buttons.map((button) => (
        <button
          css={styles.button}
          style={{ width: props.width }}
          key={button.name}
          data-variant={active === button.name ? 'filled' : 'outlined'}
          data-size={size}
          onClick={() => setActive(button.name)}
          {...props}
        >
          {button.name}
        </button>
      ))}
    </Container>
  );
};
