import { Routes } from '@enums';
import { Container } from '@primitives';
import Link from 'next/link';
import { StyledHeader } from './styles';

export const Header = () => (
  <StyledHeader>
    <Container
      css={{
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
      <nav>
        <Link href={Routes.USERS}>
          <a>users</a>
        </Link>
      </nav>
    </Container>
  </StyledHeader>
);
