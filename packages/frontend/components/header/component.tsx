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
      <Container css={styles.header_wrapper}>
        <Link href={Routes.DEFAULT}>
          <a>
            <Logo />
          </a>
        </Link>
        <Container css={styles.navigation_wrapper}>
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
    <header css={[styles.header, styles.css_responsive]}>
      <Container css={styles.header_wrapper} className="header_wrapper">
        <div css={styles.burger_menu_top} className="burger_menu_top">
          <Link href={Routes.DEFAULT}>
            <a>
              <Logo />
            </a>
          </Link>
          <div
            css={styles.burger_menu_button}
            className="burger_menu_button"
            onClick={burgerMenuButtonOnClick}
            aria-hidden="true"
          >
            <Icon icon={IconName.LIST} color="yellow" />
          </div>
        </div>
        <div
          css={styles.burger_menu_wrapper}
          className="burger_menu_wrapper display_none"
          id="burgerMenuWrapper"
        >
          <Container css={styles.navigation_wrapper}>
            <nav css={styles.navigation} className="navigation">
              <InternalLink
                href={Routes.DEFAULT}
                label={t('header.nav.home')}
              />
              <InternalLink
                href={Routes.DEFAULT}
                label={t('header.nav.category')}
              />
              <InternalLink
                href={Routes.DEFAULT}
                label={t('header.nav.search')}
              />
              <InternalLink
                href={Routes.DEFAULT}
                label={t('header.nav.news')}
              />
              <InternalLink
                href={Routes.DEFAULT}
                label={t('header.nav.about_us')}
              />
            </nav>
          </Container>
          <div css={styles.buttons_wrapper} className="buttons_wrapper">
            <Button size="small">
              <span css={styles.button_create_account_text}>
                {t('header.buttons.create_account')}
              </span>
            </Button>
            <Button size="small" variant="outlined">
              <span css={styles.button_sign_in}>
                {t('header.buttons.sign_in')}
              </span>
            </Button>
          </div>
        </div>
      </Container>
      <Link href={Routes.USERS}>
        <a>users</a>
      </Link>
    </header>
  );
};

const burgerMenuButtonOnClick = () => {
  const burgerMenuWrapper = document.getElementById('burgerMenuWrapper');
  burgerMenuWrapper.classList.toggle(`display_none`);
};
