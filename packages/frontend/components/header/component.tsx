import { Routes } from '@enums';
import { Button, Container, InternalLink } from '@primitives';
import Link from 'next/link';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => (
  <header css={styles.header}>
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexGrow: 1,
      }}
    >
      <Link href={Routes.DEFAULT}>
        <a>
          <Logo />
        </a>
      </Link>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 2,
          maxWidth: '60%',
          marginLeft: '4em',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '70%',
            gap: '1em',
          }}
        >
          <InternalLink href={Routes.DEFAULT} label="Home" />
          <InternalLink href={Routes.DEFAULT} label="Category" />
          <InternalLink href={Routes.DEFAULT} label="Search" />
          <InternalLink href={Routes.DEFAULT} label="News" />
          <InternalLink href={Routes.DEFAULT} label="About us" />
          {/* <Link href={Routes.USERS}>
            <a>users</a>
          </Link> */}
        </nav>
      </Container>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: 1,
          maxWidth: '21%',
        }}
      >
        <Button size="small">
          <span css={styles.buttonCreateAccountText}>Create Account</span>
        </Button>
        <Button size="small" variant="outlined">
          <span css={styles.buttonSignIn}>Sign In</span>
        </Button>
      </Container>
    </Container>
  </header>
);
