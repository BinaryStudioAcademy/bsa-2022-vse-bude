import { Container } from '@primitives';
import { FooterForm } from './footer-form';
import * as styles from './styles';

export const Footer = () => (
  <footer css={styles.footer}>
    <Container>
      [<FooterForm />]
    </Container>
  </footer>
);
