import { Row } from '@primitives';
import * as styles from './styles';

export const FooterContentWrapper = () => (
  <Row style={{ justifyContent: 'space-between' }}>
    <div css={styles.logo_links}></div>
  </Row>
);
