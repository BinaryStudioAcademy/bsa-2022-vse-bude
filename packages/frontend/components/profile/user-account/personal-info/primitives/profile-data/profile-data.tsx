import type { UserProfileDto } from '@vse-bude/shared';
import { Anchor, Flex } from '@primitives';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const ProfileData = ({ user }: { user: UserProfileDto }) => {
  const { firstName, lastName, socialMedia } = user;
  const { t } = useTranslation();
  
return (
    <div css={styles.profileWrapper}>
      <div css={styles.fullName}>
        <span css={styles.name}>{firstName}</span>
        <span css={styles.name}>{lastName}</span>
      </div>

      <div css={styles.networks}>
        {socialMedia.length && (
          <h5 css={styles.sectionHeader}>
            {t('personal-info:headline.socialNetworks')}
          </h5>
        )}
        <Flex>
          {socialMedia.map((it) => {
            const { id, link, socialMedia } = it;
            
return (
              <div key={id} css={styles.linkContainer}>
                <Anchor href={link} label={socialMedia} variant="primary" />
              </div>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};
