import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAuth } from '@hooks';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components/layout';
import { Container, Flex } from '@primitives';
import { logoutUser } from 'store/auth';
import { DashboardLink } from './dashboard-link';
import type { AccountPageProps } from './types';
import { getLinksData } from './account-links-data';
import * as styles from './styles';
import { isInAccount } from './utils';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const { query, asPath } = useRouter();
  const { t } = useTranslation();
  const { user: authUser } = useAuth();

  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('account:accountPage')}</h3>
          <Flex css={styles.pageContent}>
            {(authUser?.id === query.id ||
              isInAccount({ id: authUser?.id, path: asPath })) && (
              <div css={styles.linksContainer}>
                {getLinksData(query.id as string).map((link, idx) => {
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
                      onClick={
                        label === 'account:signOut'
                          ? () => dispatch(logoutUser())
                          : null
                      }
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
