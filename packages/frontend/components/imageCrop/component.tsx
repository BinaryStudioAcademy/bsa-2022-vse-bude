import { Button, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import type { Crop, PixelCrop } from 'react-image-crop';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '@helpers';
import type { ImageCropModalProps } from './types';
import * as styles from './styles';

export const ImageCropModal = ({
  file,
  onSave,
  onClose,
  circle = false,
}: ImageCropModalProps) => {
  const { t } = useTranslation();
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    setImageSrc(URL.createObjectURL(file));
  }, [file]);

  const handleSaveCroppedImage = async () => {
    if (completedCrop) {
      const croppedImage = await getCroppedImg(
        document.getElementById('image-crop-preview') as HTMLImageElement,
        completedCrop,
      );

      const croppedImageFile = new File(
        [croppedImage],
        `upload.${croppedImage.type.split('/')[1]}`,
        {
          type: croppedImage.type,
        },
      );
      onSave(croppedImageFile);
    } else {
      onSave(file);
    }
  };

  return (
    <Modal visible={true}>
      <ReactCrop
        css={styles.imageCrop}
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        onComplete={(c) => setCompletedCrop(c)}
        circularCrop={circle}
        aspect={circle ? 1 : undefined}
      >
        <img src={imageSrc} alt="crop" id="image-crop-preview" />
      </ReactCrop>
      <div css={styles.buttonRow}>
        <Button onClick={handleSaveCroppedImage}>
          {t('personal-info:action.save')}
        </Button>
        <Button variant="outlined" onClick={onClose}>
          {t('personal-info:action.cancel')}
        </Button>
      </div>
    </Modal>
  );
};

// export default ImageCropModal;
