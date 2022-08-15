import { Container } from '@primitives';
import * as styles from './styles';
import { FooterContentWrapper } from './footer-content wrapper';

export const Footer = () => (
  <footer css={styles.footer}>
    <Container>
      <FooterContentWrapper />
    </Container>
  </footer>
);
