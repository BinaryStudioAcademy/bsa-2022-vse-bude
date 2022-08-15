import { Routes } from '@enums';
import {
  Avatar,
  Button,
  Container,
  Dropdown,
  Icon,
  InternalLink,
} from '@primitives';
import { IconName } from 'common/enums/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Logo } from '../primitives/logo/component';
import * as styles from './styles';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header css={styles.header}>
      <Container css={styles.headerWrapper}>
        <Link href={Routes.DEFAULT}>
          <a>
            <Logo />
          </a>
        </Link>
        <Container css={styles.navigationWrapper}>
          <nav css={styles.navigation}>
            <InternalLink
              href={Routes.DEFAULT}
              label={t('test.nested.value')}
            />
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
              Category&nbsp;
              <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
            </Dropdown>
            <InternalLink href={Routes.DEFAULT} label="Search" />
            <InternalLink href={Routes.DEFAULT} label="News" />
            <InternalLink href={Routes.DEFAULT} label="About us" />
          </nav>
        </Container>
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
      </Container>
      <Link href={Routes.USERS}>
        <a>users</a>
      </Link>
    </header>
  );
};

export const HeaderLoggedOut = () => {
  const { t } = useTranslation('common');

  return (
    <header css={styles.header}>
      <Container css={styles.headerWrapper}>
        <Link href={Routes.DEFAULT}>
          <a>
            <Logo />
          </a>
        </Link>
        <Container css={styles.navigationWrapper}>
          <nav css={styles.navigation}>
            <InternalLink href={Routes.DEFAULT} label={t('header.nav.home')} />
            <InternalLink
              href={Routes.DEFAULT}
              label={t('header.nav.category')}
            />
            <InternalLink
              href={Routes.DEFAULT}
              label={t('header.nav.search')}
            />
            <InternalLink href={Routes.DEFAULT} label={t('header.nav.news')} />
            <InternalLink
              href={Routes.DEFAULT}
              label={t('header.nav.about_us')}
            />
          </nav>
        </Container>
        <div css={styles.buttonsWrapper}>
          <Button size="small">
            <span css={styles.buttonCreateAccountText}>
              {t('header.buttons.create_account')}
            </span>
          </Button>
          <Button size="small" variant="outlined">
            <span css={styles.buttonSignIn}>{t('header.buttons.sign_in')}</span>
          </Button>
        </div>
      </Container>
      <Link href={Routes.USERS}>
        <a>users</a>
      </Link>
    </header>
  );
};
