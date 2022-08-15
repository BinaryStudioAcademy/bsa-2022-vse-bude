import { Routes } from '@enums';
import { Button, Container, InternalLink } from '@primitives';
import Link from 'next/link';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => (
  <header css={styles.header}>
    <Container css={styles.headerWrapper}>
      <Link href={Routes.DEFAULT}>
        <a>
          <Logo />
        </a>
      </Link>
      <Container css={styles.navigationWrapper}>
        <nav css={styles.navigation}>
          <InternalLink href={Routes.DEFAULT} label="Home" />
          <InternalLink href={Routes.DEFAULT} label="Category" />
          <InternalLink href={Routes.DEFAULT} label="Search" />
          <InternalLink href={Routes.DEFAULT} label="News" />
          <InternalLink href={Routes.DEFAULT} label="About us" />
        </nav>
      </Container>
      <div css={styles.buttonsWrapper}>
        <Button size="small">
          <span css={styles.buttonCreateAccountText}>Create Account</span>
        </Button>
        <Button size="small" variant="outlined">
          <span css={styles.buttonSignIn}>Sign In</span>
        </Button>
      </div>
    </Container>
    <Link href={Routes.USERS}>
      <a>users</a>
    </Link>
  </header>
);
