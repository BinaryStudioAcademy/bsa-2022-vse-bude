import { FC } from 'react';
import type { AccountPageProps } from './types';
import * as styles from './styles';
import { linksData } from './account-links-data';
import { Layout } from '@components';
import { Container, Flex, InternalLink } from '@primitives';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>Account Page</h3>
          <Flex css={styles.pageContent}>
            <Flex css={styles.linksContainer}>
              {linksData.map((link, idx) => {
                return (
                  <div key={link.path + idx} css={styles.link}>
                    <Flex
                      //style={router.pathname === link.path ? styles.activeLink : null}
                      css={styles.linkContent}
                      align="center"

                    >
                      <div css={styles.icon}>
                        <Image
                          src={link.iconPath}
                          width={link.width}
                          height={link.height}
                          layout="fixed"
                          alt={link.label}
                        />
                      </div>
                      <InternalLink href={link.path} label={link.label} />
                    </Flex>
                  </div>
                );
              })}
            </Flex>

            {children}
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};
