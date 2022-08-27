import { useAuth, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import { useState } from 'react';
import { Button } from '@primitives';
import flag from '../../../../public/images/flagBg.png';
import { NestedLayout } from '../../../sub-pages/common';
import { Noavatar, Avatar } from './primitives';
import * as styles from './styles';
import EditForm from './edit-form';

export const PersonalInfo = () => {
  // const { t } = useTranslation();
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
              Edit profile
            </Button>
          )}
        </Flex>
        {isEditing && <EditForm />}
        {!isEditing && <pre>{JSON.stringify(user)}</pre>}
      </div>
    </NestedLayout>
  );
};
