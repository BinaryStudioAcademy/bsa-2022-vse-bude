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
          setActive(button.name);
          button.onClick();
        }}
        {...props}
      >
        {button.text}
      </button>
    ))}
  </div>
);
