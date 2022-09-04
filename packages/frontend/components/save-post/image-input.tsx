import { Column, Icon } from '@primitives';
import Image from 'next/image';
import { IconColor, IconName } from '@enums';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { allowedImgExtension } from 'common/enums/allowedImgExtension';
import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';
import { SectionHeader } from '../profile/user-account/common';
import type { ImageInputProps } from './types';
import * as styles from './styles';

const ImageCropModal = dynamic(
  () => import('../../components/imageCrop/component'),
);

const MAX_IMAGE_COUNT = 30;

function ImageInput({ images, setImages }: ImageInputProps) {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<File>();

  const validateFile = useCallback(
    (file) => {
      if (!file) {
        return;
      }

      if (!Object.values(allowedImgExtension).includes(file.type)) {
        setError(t('create-post:validation.images.unsupportedType'));

        return;
      }
      if (file.size > MAX_IMAGE_SIZE) {
        setError(t('create-post:validation.images.large'));

        return;
      }
      setCurrentImage(file);
      setError('');
    },
    [t, setCurrentImage],
  );

  const onDrop = useCallback(
    (acceptFile) => {
      const file = acceptFile[0];
      validateFile(file);
    },
    [validateFile],
  );
  const { getRootProps, isDragActive } = useDropzone({ onDrop });

  const imagesInputHandler = (e) => {
    const file = e.target?.files[0];
    validateFile(file);
  };
  const getVariant = () => (images.length !== 0 ? 'filled' : 'empty');

  const onImageCropModalSave = (croppedImage) => {
    setImages([...images, croppedImage]);

    const reader = new FileReader();
    reader.onloadend = () => {
      const preview = reader.result as string;
      setImagePreviews((prev) => [...prev, preview]);
    };
    reader.readAsDataURL(croppedImage);

    setCurrentImage(undefined);
  };

  const onImageCropModalClose = () => {
    setCurrentImage(undefined);
  };

  useEffect(() => {
    if (
      images.filter((item) => typeof item === 'string').length === images.length
    )
      setImagePreviews(images as string[]);
  }, [images]);

  return (
    <Column css={styles.sectionRow}>
      {currentImage && (
        <ImageCropModal
          file={currentImage}
          onSave={onImageCropModalSave}
          onClose={onImageCropModalClose}
          okLabel={t('create-post:button.ok')}
          dismissLabel={t('create-post:button.cancel')}
        />
      )}

      <SectionHeader>{t('create-post:headline.downloadPhotos')}</SectionHeader>
      <p css={styles.photosCaption}>
        {t('create-post:caption.downloadPhotos')}
      </p>
      <div data-variant={getVariant()} css={styles.photosWrapper}>
        <input
          css={styles.photosInput}
          id="post-photo"
          type="file"
          name="file"
          onChange={imagesInputHandler}
          accept="image/png, image/jpeg"
        />
        {imagePreviews.length > 0 &&
          imagePreviews.map((item, indx) => (
            <div key={indx} css={styles.imgWrapper}>
              <Image objectFit="cover" layout="fill" src={item} />
            </div>
          ))}
        {imagePreviews.length < MAX_IMAGE_COUNT && (
          <div data-variant={getVariant()} css={styles.photosLabelWrapper}>
            <div
              {...getRootProps()}
              data-drag={isDragActive ? 'active' : 'default'}
              data-variant={getVariant()}
              css={styles.labelWrapperInner}
            >
              <div css={styles.icoWrapper}>
                <Icon
                  data-variant={getVariant()}
                  color={IconColor.YELLOW}
                  icon={IconName.IMAGE}
                  cssExtend={styles.photoIco}
                />

                <p css={styles.photosLabel}>
                  {t('create-post:label.photosMain')}
                  <label htmlFor="post-photo">
                    {t('create-post:label.photosCaption')}
                  </label>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <p css={styles.photosError}>{error}</p>}
    </Column>
  );
}
export default ImageInput;
