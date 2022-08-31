import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components';
import { Container, Flex } from '@primitives';
import { DashboardLink } from './dashboard-link';
import type { AccountPageProps } from './types';
import { getLinksData } from './account-links-data';
import * as styles from './styles';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const { query, pathname } = useRouter();
  const { t } = useTranslation();
  const { user: authUser } = useAuth();
  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('account:accountPage')}</h3>
          <Flex css={styles.pageContent}>
            {authUser?.id === query.id && (
              <div css={styles.linksContainer}>
                {getLinksData(query.id as string).map((link, idx) => {
                  const { iconPath, label, path } = link;
                  const location = pathname === link.path;
                  const tLabel = t(label);

                  return (
                    <DashboardLink
                      key={path + idx}
                      iconPath={iconPath}
                      label={tLabel}
                      location={location}
                      path={path}
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
