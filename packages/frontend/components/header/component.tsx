import { Routes } from '@enums';
import { Container, Dropdown } from '@primitives';
import Link from 'next/link';
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
          <h2>Vse Bude</h2>
        </a>
      </Link>
      <Dropdown
        options={[
          {
            value: 'Home',
            key: 'home',
            onClick: () => {
              console.log('home');
            },
          },
          {
            value: 'About',
            key: 'about',
            onClick: () => {
              console.log('about');
            },
            disabled: true,
          },
        ]}
      >
        Category
      </Dropdown>
      <nav>
        <Link href={Routes.USERS}>
          <a>users</a>
        </Link>
      </nav>
    </Container>
  </header>
);
