import { IconColor, IconName } from '@enums';
import { IconButton } from '../icon-button';
import * as styles from './styles';

export const Notification = () => (
  <div css={styles.wrapper}>
    <div css={styles.titleWrapper}>
      <h5 css={styles.title}>title</h5>
      <IconButton
        cssExtend={styles.viewBtn}
        ariaLabel="remove"
        icon={IconName.XMARK}
        color={IconColor.GRAY}
      />
    </div>
    <p css={styles.description}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aperiam
      perspiciatis quasi, dignissimos consequatur a?
    </p>
    <span css={styles.time}>20.12.2022</span>
  </div>
);
