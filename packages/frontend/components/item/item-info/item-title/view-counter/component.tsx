import { Icon } from '@primitives';
import { IconName } from '@enums';
import * as styles from './styles';

interface ViewCounterProps {
  viewsCount: string;
}

export const ViewCounter = ({ viewsCount }: ViewCounterProps) => (
  <div css={styles.counter}>
    <Icon icon={IconName.EYE} color="grey" size="xs" />
    <span>{viewsCount}</span>
  </div>
);
