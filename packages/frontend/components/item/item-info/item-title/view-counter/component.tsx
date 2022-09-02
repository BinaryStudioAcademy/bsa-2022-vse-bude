import { Icon } from '@primitives';
import { IconColor, IconName } from '@enums';
import * as styles from './styles';

interface ViewCounterProps {
  viewsCount: number;
}

export const ViewCounter = ({ viewsCount }: ViewCounterProps) => (
  <div css={styles.counter}>
    <Icon icon={IconName.EYE} color={IconColor.GRAY} size="xs" />
    <span>{viewsCount}</span>
  </div>
);
