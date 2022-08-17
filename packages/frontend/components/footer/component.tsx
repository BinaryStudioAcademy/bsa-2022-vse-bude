import { Container } from '@primitives';
import * as styles from './styles';
import { ContentWrapper } from './content-wrapper';

export const Footer = () => (
  <footer css={styles.footer}>
    <Container>
      <ContentWrapper />
    </Container>
  </footer>
);
