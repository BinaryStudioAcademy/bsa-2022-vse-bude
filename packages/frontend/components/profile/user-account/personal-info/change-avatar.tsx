import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@hooks';
import React, { useRef, useState } from 'react';
import { Popover, IconButton, Icon } from '@primitives';
import { IconName } from '@enums';
import { ColorPalette, MAX_IMAGE_SIZE } from '@vse-bude/shared';
import { updateUserAvatar } from 'store/profile/actions';
import dynamic from 'next/dynamic';
import { allowedImgExtension } from 'common/enums/allowedImgExtension';
import * as styles from './styles';

const ImageCropModal = dynamic(() => import('../../../imageCrop/component'));

const ChangeAvatar = () => {
  const { t } = useTranslation();
  const inputFile = useRef(null);
  const dispatch = useAppDispatch();
  const [newAvatar, setNewAvatar] = useState<File>(null);
  const [error, setError] = useState('');
  const handleUpdateAvatar = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    if (!Object.values(allowedImgExtension).includes(file.type)) {
      setError(t('personal-info:validation.avatar.fileType'));

      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setError(t('personal-info:validation.avatar.maxSize'));

      return;
    }
    setNewAvatar(file);
  };

  const onCloseCropModal = () => {
    setNewAvatar(null);
  };

  const onCropAvatar = (croppedImage) => {
    const formdata = new FormData();
    formdata.append('file', croppedImage);
    dispatch(updateUserAvatar(formdata));

    setNewAvatar(null);
  };

  const handleOpenDropdown = () => {
    setError('');
  };

  const handleDeleteAvatar = () => {
    setNewAvatar(null);
    dispatch(updateUserAvatar(null));
  };
  const onClickFileInput = (e) => {
    e.target.value = null;
  };

  return (
    <React.Fragment>
      {error && <div css={styles.error}>{error}</div>}
      {newAvatar && (
        <ImageCropModal
          file={newAvatar}
          onSave={onCropAvatar}
          onClose={onCloseCropModal}
          okLabel={t('personal-info:button.ok')}
          dismissLabel={t('personal-info:button.cancel')}
          circle
        />
      )}
      <Popover
        trigger={
          <IconButton
            icon={IconName.CAMERA}
            backgroundColor="lightgray"
            color={ColorPalette.GRAY_300}
            cssExtend={styles.avatarUpdateButton}
            onClick={handleOpenDropdown}
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
              <span>{t('personal-info:avatar.change')}</span>
            </button>
            <button
              css={styles.popoverContentItem}
              onClick={handleDeleteAvatar}
              data-variant="icon"
            >
              <Icon icon={IconName.TRASH} color="yellow" />
              <span>{t('personal-info:avatar.delete')}</span>
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
        onClick={onClickFileInput}
        accept="image/png, image/jpeg"
      />
    </React.Fragment>
  );
};

export default ChangeAvatar;
