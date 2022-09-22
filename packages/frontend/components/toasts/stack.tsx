import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTypedSelector } from '@hooks';
import { Icon } from '@primitives';
import { iconsProps } from './utils';
import * as styles from './styles';

const ToastStack = () => {
  const toast = useTypedSelector((state) => state.toast.list);

  return (
    <TransitionGroup css={styles.toastStack}>
      {toast.map(({ id, level, description }) => (
        <CSSTransition
          key={id}
          timeout={styles.TRANSITION_TIMEOUT}
          classNames="toast"
        >
          <article css={styles.toast} data-variant={level}>
            <Icon {...iconsProps[level]} />
            <p>{description}</p>
          </article>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ToastStack;
