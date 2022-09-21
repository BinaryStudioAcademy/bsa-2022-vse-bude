import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@hooks';
import React, { useRef, useState } from 'react';
import { Popover, Icon } from '@primitives';
import { IconColor, IconName } from '@enums';
import { updateUserAvatar } from 'store/profile/actions';
import dynamic from 'next/dynamic';
import { allowedImgExtension } from 'common/enums/allowedImgExtension';
import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import { addToast } from 'store/toast/actions';
import * as styles from './styles';

const ImageCropModal = dynamic(() => import('../../../imageCrop/component'));

const ChangeAvatar = () => {
  const { t } = useTranslation();
  const inputFile = useRef(null);
  const dispatch = useAppDispatch();
  const [newAvatar, setNewAvatar] = useState<File>(null);
  const handleUpdateAvatar = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    setNewAvatar(file);
  };

  const onCloseCropModal = () => {
    setNewAvatar(null);
  };

  const onCropAvatar = (croppedImage) => {
    if (!Object.values(allowedImgExtension).includes(croppedImage.type)) {
      dispatch(
        addToast({
          level: 'error',
          description: t('personal-info:validation.avatar.fileType'),
        }),
      );

      return;
    }
    if (croppedImage.size > MAX_IMAGE_SIZE) {
      dispatch(
        addToast({
          level: 'error',
          description: t('personal-info:validation.avatar.maxSize'),
        }),
      );

      return;
    }

    const formdata = new FormData();
    formdata.append('file', croppedImage);
    dispatch(updateUserAvatar(formdata));

    setNewAvatar(null);
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
          <Icon
            icon={IconName.CAMERA}
            color={IconColor.ORANGE}
            cssExtend={styles.avatarUpdateButton}
          />
        }
        triggerWrapperCssExtend={styles.avatarPopoverTrigger}
        bodyWrapperCssExtend={styles.bodyWrapper}
        placement="bottom-left"
        position="absolute"
      >
        {() => (
          <div css={styles.popoverContentWrapper}>
            <button
              css={styles.popoverContentItem}
              onClick={handleUpdateAvatar}
              data-variant="icon"
            >
              <Icon icon={IconName.IMAGE} color={IconColor.YELLOW} />
              <span>{t('personal-info:avatar.change')}</span>
            </button>
            <button
              css={styles.popoverContentItem}
              onClick={handleDeleteAvatar}
              data-variant="icon"
            >
              <Icon icon={IconName.TRASH} color={IconColor.YELLOW} />
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
