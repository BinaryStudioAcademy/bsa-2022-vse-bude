import { ImageWithFallback } from '@components/primitives';
import { useTranslation } from 'next-i18next';
import no_image from '../../../../public/images/no_image.png';
import * as styles from './styles';

interface ItemImageSliderLargeProps {
  imageLinks: string[];
  currentImage: number;
  setCurrentImage: (value: number) => void;
  setOpenModal: (value: boolean) => void;
}

export const ItemImageSliderLarge = ({
  imageLinks,
  currentImage,
  setCurrentImage,
  setOpenModal,
}: ItemImageSliderLargeProps) => {
  const { t } = useTranslation();

  const handleClick = (imageLink) => {
    setCurrentImage(imageLink);
  };

  const handleKeyCodes = ['Spaces', 'Enter'];

  const handleKeyDownPreview = (e, index) => {
    handleKeyCodes.includes(e.code) && handleClick(index);
  };

  const handleKeyDownShowModal = (e) => {
    handleKeyCodes.includes(e.code) && setOpenModal(true);
  };

  return (
    <div css={styles.sliderWrapper}>
      <div css={styles.imagesWrapper}>
        {imageLinks.map((link, index) => (
          <div
            key={link + index}
            css={[
              styles.imageWrapper,
              index === currentImage && styles.pickedImage,
            ]}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => handleKeyDownPreview(e, index)}
            onClick={() => handleClick(index)}
          >
            <ImageWithFallback
              key={index}
              alt="item"
              css={styles.image}
              priority={index < 4}
              src={link}
              fallbackSrc={no_image}
              fill
            />
          </div>
        ))}
      </div>
      <div
        css={styles.focusedImageWrapper}
        onClick={() => setOpenModal(true)}
        aria-hidden="true"
      >
        <ImageWithFallback
          alt="item"
          css={styles.image}
          src={imageLinks[currentImage]}
          fallbackSrc={no_image}
          fill
        />
        <div
          css={styles.seeImageCaption}
          onClick={() => setOpenModal(true)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => handleKeyDownShowModal(e)}
        >
          {t('item:showImageCaption')}
        </div>
      </div>
    </div>
  );
};
