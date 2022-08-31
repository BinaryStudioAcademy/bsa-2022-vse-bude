import { useTranslation } from 'next-i18next';
import { useAuth, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { Flex } from 'grapefruit-ui';
import React, { useRef, useState } from 'react';
import { Button, Avatar, Popover, IconButton, Icon } from '@primitives';
import dynamic from 'next/dynamic';
import { IconName } from '@enums';
import { ColorPalette } from '@vse-bude/shared';
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
  const [_croppedAvatar, setCroppedAvatar] = useState(null);
  const { user: authUser } = useAuth();
  const user = useTypedSelector((state) => state.profile.user, shallowEqual);
  const isAuthUser = authUser?.id === user?.id;
  const inputFile = useRef(null);

  const handleUpdateAvatar = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const onCloseCropModal = () => {
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
          onClose={onCloseCropModal}
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
            <Avatar
              image={user.avatar}
              firstName={user.firstName}
              lastName={user.lastName}
              isLarge={true}
            />
            {isAuthUser &&
              renderChangeAvatarComponent(
                handleUpdateAvatar,
                inputFile,
                onSelectFile,
              )}
          </div>
        </div>

        <Flex justify={'flex-end'} css={styles.buttons}>
          {!isEditing && isAuthUser && (
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

const renderChangeAvatarComponent = (
  handleUpdateAvatar: () => void,
  inputFile: React.MutableRefObject<any>,
  onSelectFile: (e: any) => void,
) => (
  <React.Fragment>
    <Popover
      trigger={
        <IconButton
          icon={IconName.CAMERA}
          backgroundColor="lightgray"
          color={ColorPalette.GRAY_300}
          cssExtend={styles.avatarUpdateButton}
        />
      }
    >
      {() => (
        <div css={styles.popoverContentWrapper}>
          <button
            css={styles.popoverContentItem}
            onClick={handleUpdateAvatar}
            data-variant="icon"
          >
            <Icon icon={IconName.IMAGE} color="yellow" />
            <span>Change the Photo</span>
          </button>
          <button
            css={styles.popoverContentItem}
            onClick={handleUpdateAvatar}
            data-variant="icon"
          >
            <Icon icon={IconName.TRASH} color="yellow" />
            <span>Delete the Photo</span>
          </button>
        </div>
      )}
    </Popover>
    <input
      type="file"
      id="file"
      ref={inputFile}
      style={{ display: 'none' }}
      onChange={onSelectFile}
      accept="image/png, image/jpeg"
    />
  </React.Fragment>
);
