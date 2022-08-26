import { useAppDispatch, useTypedSelector } from '@hooks';
import { Column, Icon, Loader } from '@primitives';
import { SectionHeader } from 'components/sub-pages/common';
import Image from 'next/image';
import { IconName } from '@enums';
import {
  fetchUploadImage,
  getPostImagesDataSelector,
  getPostImagesErrorSelector,
  getPostImagesLoadingSelector,
} from 'store/post';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

function ImageInput() {
  const dispatch = useAppDispatch();
  const images = useTypedSelector(getPostImagesDataSelector);
  const imageError = useTypedSelector(getPostImagesErrorSelector);
  const imageLoading = useTypedSelector(getPostImagesLoadingSelector);

  const imagesInputHandler = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    dispatch(fetchUploadImage(formData));
  };

  const getVariant = () => (images.length !== 0 ? 'filled' : 'empty');
  const { t } = useTranslation();

  return (
    <Column css={styles.sectionRow}>
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
        {images.map((item) => (
          <div key={item} css={styles.imgWrapper}>
            <Image objectFit="cover" layout="fill" src={item} />
          </div>
        ))}
        {images.length < 30 && (
          <div data-variant={getVariant()} css={styles.photosLabelWrapper}>
            <div data-variant={getVariant()} css={styles.labelWrapperInner}>
              {imageLoading ? (
                <Loader size="big"></Loader>
              ) : (
                <div css={styles.icoWrapper}>
                  <Icon
                    data-variant={getVariant()}
                    color="yellow"
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
              )}
            </div>
          </div>
        )}
      </div>
      {imageError && <p>{imageError}</p>}
    </Column>
  );
}
export default ImageInput;
