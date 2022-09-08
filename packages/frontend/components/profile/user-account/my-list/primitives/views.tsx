import { Icon } from '@primitives';
import { IconColor, IconName } from '@enums';
import * as styles from './styles';

export const Views = ({ views }: { views: string }) => (
  <div css={styles.viewsWrapper}>
    <Icon
      icon={IconName.EYE}
      color={IconColor.GRAY}
      cssExtend={styles.viewsIcon}
    />
    <span css={styles.views}>{views}</span>
  </div>
);
