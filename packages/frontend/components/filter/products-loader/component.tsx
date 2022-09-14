import { Loader } from '@components/primitives';
import * as styles from './styles';

export const ProductsLoader = () => (
  <div css={styles.loaderWrapper}>
    <Loader size="large" />
  </div>
);
