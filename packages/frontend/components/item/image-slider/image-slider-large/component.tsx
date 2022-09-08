import { useTranslation } from 'next-i18next';
import Image from 'next/image';
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
            <Image
              key={index}
              src={link}
              alt="item"
              css={styles.image}
              priority={index < 4}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div
        css={styles.focusedImageWrapper}
        onClick={() => setOpenModal(true)}
        aria-hidden="true"
      >
        <Image
          src={imageLinks[currentImage]}
          alt="item"
          css={styles.image}
          layout="fill"
          objectFit="contain"
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
