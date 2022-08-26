import { useTranslation } from 'next-i18next';
import { useAuth, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import { useState } from 'react';
import { Button } from '@primitives';
import dynamic from 'next/dynamic';
import flag from '../../../../public/images/flagBg.png';
import { NestedLayout } from '../common';
import * as styles from './styles';
import { Noavatar, Avatar, ProfileData } from './primitives';

const EditForm = dynamic(() => import('./edit-form'));

export const PersonalInfo = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const { user: authUser } = useAuth();
  const user = useTypedSelector((state) => state.profile.user, shallowEqual);

  if (!user) {
    return null;
  }

  return (
    <NestedLayout>
      <div css={styles.personalHeader}>
        <div css={styles.headerWrapper}>
          <div css={styles.flagWrapper}>
            <img css={styles.flag} src={flag.src} alt="flag" />
          </div>

          <div css={styles.avatarWrapper}>
            {user.avatar ? (
              <Avatar src={user.avatar} alt="avatar" />
            ) : (
              <Noavatar firstName={user.firstName} lastName={user.lastName} />
            )}
          </div>
        </div>

        <Flex justify={'flex-end'} css={styles.buttons}>
          {!isEditing && authUser?.id === user.id && (
            <Button
              type="button"
              variant="outlined"
              onClick={() => setIsEditing(true)}
            >
              {t('personal-info:action.edit')}
            </Button>
          )}
        </Flex>
        {isEditing && <EditForm />}
        {!isEditing && <ProfileData user={user} />}
      </div>
    </NestedLayout>
  );
};