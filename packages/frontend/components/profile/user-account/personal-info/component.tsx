import { useTranslation } from 'next-i18next';
import { useAuth, useTypedSelector, useAppDispatch } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import dynamic from 'next/dynamic';
import { Button, Avatar } from '@primitives';
import { fetchFullUserProfile, setIsEditing, resetIsEditing } from '@store';
import { useEffect } from 'react';
import { NestedLayout } from '../common';
import * as styles from './styles';
import { ProfileData } from './primitives';

const EditForm = dynamic(() => import('./edit-form'));
const ChangeAvatar = dynamic(() => import('./change-avatar'));

export const PersonalInfo = () => {
  const { t } = useTranslation();
  const { user: authUser } = useAuth();
  const dispatch = useAppDispatch();

  const { user, loading, isEditing } = useTypedSelector(
    (state) => state.profile,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(resetIsEditing());
  }, [dispatch]);

  const onGetFullProfile = () => dispatch(fetchFullUserProfile());

  const isAuthUser = authUser?.id === user?.id;

  if (!user) {
    return null;
  }

  return (
    <NestedLayout>
      <div css={styles.personalHeader}>
        <div css={[styles.headerWrapper, !isAuthUser && styles.marginBottom]}>
          <div css={styles.flagWrapper}>
            <div css={styles.flag}></div>
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
        {!isEditing && isAuthUser && (
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button
              type="button"
              variant="outlined"
              disabled={loading}
              onClick={() => {
                onGetFullProfile();
                dispatch(setIsEditing());
              }}
            >
              {t('personal-info:action.edit')}
            </Button>
          </Flex>
        )}

        {isEditing && !loading && <EditForm user={user} />}
        {!isEditing && <ProfileData user={user} />}
      </div>
    </NestedLayout>
  );
};
