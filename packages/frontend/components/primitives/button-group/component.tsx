import * as styles from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
  buttons,
  active,
  setActive,
  ...props
}: ButtonGroupProps) => (
  <div css={styles.wrapper}>
    {buttons.map((button) => (
      <button
        css={styles.button}
        style={{ width: props.width }}
        key={button.name}
        data-selected={active === button.name ? 'selected' : 'default'}
        onClick={() => {
          setActive ? setActive(button.name) : null;
          button.onClick();
        }}
        {...props}
      >
        {button.text}
      </button>
    ))}
  </div>
);
