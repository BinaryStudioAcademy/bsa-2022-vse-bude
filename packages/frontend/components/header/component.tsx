import { Routes } from '@enums';
import { Avatar, Container, Dropdown, Icon, IconButton } from '@primitives';
import { IconName } from 'common/enums/icons';
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
            icon: {
              icon: IconName.SETTINGS,
              color: 'yellow',
            },
          },
          {
            value: 'About',
            key: 'about',
            onClick: () => {
              console.log('about');
            },
            icon: {
              icon: IconName.SIGN_OUT,
              color: 'disabled',
            },
            disabled: true,
          },
        ]}
      >
        Dropdown with icons&nbsp;
        <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
      </Dropdown>
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
        Dropdown without icons&nbsp;
        <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
      </Dropdown>
      <Avatar firstName="John" lastName="Doe" />
      <IconButton
        icon={IconName.SIGN_OUT}
        color="yellow"
        label="Sign out"
        onClick={() => console.log('hello')}
      />
      <IconButton
        icon={IconName.SIGN_OUT}
        color="yellow"
        onClick={() => console.log('hello')}
      />
      <nav>
        <Link href={Routes.USERS}>
          <a>users</a>
        </Link>
      </nav>
    </Container>
  </header>
);
