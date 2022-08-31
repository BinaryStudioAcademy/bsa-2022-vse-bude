import type { UserProfileDto } from '@vse-bude/shared';
import { Anchor, Flex } from '@primitives';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const ProfileData = ({ user }: { user: UserProfileDto }) => {
  const { firstName, lastName, socialMedia } = user;
  const { t } = useTranslation();

  return (
    <div css={styles.profileWrapper}>
      <div css={styles.section}>
        <h4 css={styles.sectionHeader}>
          {t('personal-info:headline.personalInfo')}
        </h4>
        <table>
          <tbody>
            <tr>
              <td css={styles.cell}>
                {t('personal-info:label.firstName') + ':'}
              </td>
              <td css={[styles.cell, styles.name]}>{firstName}</td>
            </tr>
            <tr>
              <td css={styles.cell}>
                {t('personal-info:label.lastName') + ':'}
              </td>
              <td css={[styles.cell, styles.name]}>{lastName}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div css={styles.section}>
        {!!socialMedia.length && (
          <h4 css={styles.sectionHeader}>
            {t('personal-info:headline.socialNetworks')}
          </h4>
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
