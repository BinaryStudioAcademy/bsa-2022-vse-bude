import { useTranslation } from 'next-i18next';
import { useAuth, useTypedSelector, useAppDispatch } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import { useState } from 'react';
import { Button, Avatar } from '@primitives';
import dynamic from 'next/dynamic';
import { fetchFullUserProfile } from '@store';
import flag from '../../../../public/images/flagBg.png';
import { NestedLayout } from '../common';
import * as styles from './styles';
import { ProfileData } from './primitives';

const EditForm = dynamic(() => import('./edit-form'));
const ChangeAvatar = dynamic(() => import('./change-avatar'));

export const PersonalInfo = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const { user: authUser } = useAuth();

  const { user, loading } = useTypedSelector(
    (state) => state.profile,
    shallowEqual,
  );

  const dispatch = useAppDispatch();
  const onGetFullProfile = () => dispatch(fetchFullUserProfile());

  const isAuthUser = authUser?.id === user?.id;

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
            <Avatar
              image={user.avatar}
              firstName={user.firstName}
              lastName={user.lastName}
              isLarge={true}
              loading={loading}
            />
            {isAuthUser && <ChangeAvatar />}
          </div>
        </div>

        <Flex justify={'flex-end'} css={styles.buttons}>
          {!isEditing && isAuthUser && (
            <Button
              type="button"
              variant="outlined"
              disabled={loading}
              onClick={() => {
                setIsEditing(true);
                onGetFullProfile();
              }}
            >
              {t('personal-info:action.edit')}
            </Button>
          )}
        </Flex>
        {isEditing && !loading && <EditForm user={user} />}
        {!isEditing && <ProfileData user={user} />}
      </div>
    </NestedLayout>
  );
};
