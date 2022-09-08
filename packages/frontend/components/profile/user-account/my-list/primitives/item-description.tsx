import { StringCutter } from '@primitives';
import * as styles from './styles';

export const ItemDescription = ({ description }: { description: string }) => (
  <div css={styles.descriptionWrapper}>
    <StringCutter lines={2}>{description}</StringCutter>
  </div>
);
