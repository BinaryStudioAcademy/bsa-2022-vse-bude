import { useAuth, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import { useState } from 'react';
import { Button } from '@primitives';
import flag from '../../../../public/images/flagBg.png';
import { NestedLayout } from '../../../sub-pages/common';
import * as styles from './styles';
import { Noavatar, Avatar, ProfileData } from './primitives';
import EditForm from './edit-form';

export const PersonalInfo = () => {
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
        {/* 21sdasds | authUser?.id*/}
        <Flex justify={'flex-end'} css={styles.buttons}>
          {!isEditing && authUser?.id === user.id && (
            <Button
              type="button"
              variant="outlined"
              onClick={() => setIsEditing(true)}
            >
              Edit profile
            </Button>
          )}
        </Flex>
        {isEditing && <EditForm />}
        {!isEditing && <ProfileData user={user} />}
      </div>
    </NestedLayout>
  );
};
