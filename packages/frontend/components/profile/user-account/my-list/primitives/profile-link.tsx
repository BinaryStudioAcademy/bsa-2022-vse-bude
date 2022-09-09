import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Routes } from '@enums';
import type { FC } from 'react';
import type { ProfileLinkProps } from './types';
import * as styles from './styles';

export const ProfileLink: FC<ProfileLinkProps> = ({
  isAuthor,
  id,
  firstName,
  lastName,
  avatar,
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`${Routes.PROFILE}/${id}`);
  };

  return (
    <div css={styles.buyerWrapper}>
      <span css={styles.term}>
        {isAuthor ? t('my-list:card.seller') : t('my-list:card.buyer')}
      </span>

      <button css={styles.profileButton} onClick={onClickHandler}>
        <div css={styles.avatarWrapper}>
          {avatar ? (
            <img css={styles.avatar} src={avatar} alt="avatar" />
          ) : null}
        </div>
        <div css={styles.nameWrapper}>
          <span css={styles.name}>{firstName}</span>
          <span css={styles.name}>{lastName}</span>
        </div>
      </button>
    </div>
  );
};
