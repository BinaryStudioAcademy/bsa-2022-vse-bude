import { useTranslation } from 'next-i18next';
import { useAuth, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import { useRef, useState } from 'react';
import { Button, IconButton, Avatar } from '@primitives';
import dynamic from 'next/dynamic';
import { IconColor, IconName } from '@enums';
import flag from '../../../../public/images/flagBg.png';
import { NestedLayout } from '../common';
import * as styles from './styles';
import { ProfileData } from './primitives';

const EditForm = dynamic(() => import('./edit-form'));
const ImageCropModal = dynamic(() => import('../../../imageCrop/component'));

export const PersonalInfo = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [croppedAvatar, setCroppedAvatar] = useState(null);
  const { user: authUser } = useAuth();
  const user = useTypedSelector((state) => state.profile.user, shallowEqual);
  const inputFile = useRef(null);

  const handleUpdateAvatar = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleCloseCropModal = () => {
    setAvatar(null);
  };

  const onCrop = (croppedImage) => {
    setCroppedAvatar(croppedImage);
    setAvatar(null);
  };

  if (!user) {
    return null;
  }

  return (
    <NestedLayout>
      {avatar && (
        <ImageCropModal
          file={avatar}
          onSave={onCrop}
          onClose={handleCloseCropModal}
          okLabel={t('personal-info:button.ok')}
          dismissLabel={t('personal-info:button.cancel')}
          circle
        />
      )}
      <div css={styles.personalHeader}>
        <div css={styles.headerWrapper}>
          <div css={styles.flagWrapper}>
            <img css={styles.flag} src={flag.src} alt="flag" />
          </div>

          <div css={styles.avatarWrapper}>
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: 'none' }}
              onChange={onSelectFile}
              accept="image/*"
            />
            <div>
              <Avatar
                image={croppedAvatar && URL.createObjectURL(croppedAvatar)}
                firstName={user.firstName}
                lastName={user.lastName}
                isLarge={true}
              />
              <IconButton
                icon={IconName.CAMERA}
                onClick={handleUpdateAvatar}
                backgroundColor="lightgray"
                color={IconColor.GRAY}
                cssExtend={styles.avatarUpdateButton}
              />
            </div>
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
