import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAuth } from '@hooks';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components/layout';
import { Container, Flex, Icon, Tooltip } from '@primitives';
import { logoutUser } from 'store/auth';
import { IconColor, IconName } from '@enums';
import { showMakePostModal } from 'store/modals/actions';
import { DashboardLink } from './dashboard-link';
import type { AccountPageProps } from './types';
import { getLinksData } from './account-links-data';
import * as styles from './styles';
import { isInAccount } from './utils';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const { query, asPath } = useRouter();
  const { t } = useTranslation();
  const { user: authUser } = useAuth();
  const isVerified = authUser?.emailVerified && authUser?.phoneVerified;
  const dispatch = useAppDispatch();

  const openMakeAPostModal = () => {
    dispatch(showMakePostModal());
  };

  const getClickHandler = (label: string) => {
    if (label === 'account:signOut') {
      return () => dispatch(logoutUser());
    }

    if (label === 'account:support') {
      return () =>
        (location.href = 'mailto:vsebude.team@gmail.com?subject=Support');
    }

    return null;
  };

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('account:accountPage')}</h3>
          <Flex css={styles.pageContent}>
            {(authUser?.id === query?.id ||
              isInAccount({ id: authUser?.id, path: asPath })) && (
              <div css={styles.linksContainer}>
                <Tooltip
                  trigger={
                    <button
                      onClick={() => openMakeAPostModal()}
                      css={styles.makePostButton}
                      disabled={!isVerified}
                    >
                      <Flex css={styles.makePostContent}>
                        <Icon icon={IconName.XMARK} color={IconColor.BLACK} />
                        <div>
                          <span css={styles.makePostLabel}>
                            {t('account:makePost')}
                          </span>
                        </div>
                      </Flex>
                    </button>
                  }
                >
                  {!isVerified && t('common:components.makePostBtn.unverified')}
                </Tooltip>
                {getLinksData(authUser?.id as string).map((link, idx) => {
                  const { iconPath, label, path } = link;
                  const location = asPath === link.path;
                  const tLabel = t(label);

                  return (
                    <DashboardLink
                      key={path + idx}
                      iconPath={iconPath}
                      label={tLabel}
                      location={location}
                      path={path}
                      onClick={getClickHandler(label)}
                    />
                  );
                })}
              </div>
            )}
            {children}
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};
