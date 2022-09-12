import * as styles from './styles';
import type { ChatItemProps } from './types';

 const ChatItem = ({isActive}: ChatItemProps) => (
    <div css={styles.wrapper} is-active={isActive.toString()}>component</div>
  );
export { ChatItem };