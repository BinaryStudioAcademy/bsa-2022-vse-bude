import { Routes } from '@enums';
import { Container } from '@primitives';
import Link from 'next/link';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => (
  <header css={styles.header}>
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <Link href={Routes.DEFAULT}>
        <a>
          <Container>
            <Logo />
          </Container>
        </a>
      </Link>
      <nav>
        <Link href={Routes.USERS}>
          <a>users</a>
        </Link>
      </nav>
    </Container>
  </header>
);
