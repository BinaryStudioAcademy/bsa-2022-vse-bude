import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { ImageModal } from '../image-modal/component';
import * as styles from './styles';

interface ItemImageSliderProps {
  imageLinks: string[];
}

export const ItemImageSlider = ({ imageLinks }: ItemImageSliderProps) => {
  const [focusedImage, setFocusedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const handleClick = (imageLink) => {
    setFocusedImage(imageLink);
  };

  const handleKeyCodes = ['Spaces', 'Enter'];

  const handleKeyDownPreview = (e, index) => {
    handleKeyCodes.includes(e.code) && handleClick(index);
  };

  const handleKeyDownShowModal = (e) => {
    handleKeyCodes.includes(e.code) && setIsModalOpen(true);
  };

  return (
    <div css={styles.sliderWrapper}>
      <div css={styles.imagesWrapper}>
        {imageLinks.map((link, index) => (
          <div
            key={link + index}
            css={[
              styles.imageWrapper,
              index === focusedImage && styles.pickedImage,
            ]}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => handleKeyDownPreview(e, index)}
            onClick={() => handleClick(index)}
          >
            <img key={index} src={link} alt="item" css={styles.image} />
          </div>
        ))}
      </div>
      <div
        css={styles.focusedImageWrapper}
        onClick={() => setIsModalOpen(true)}
        aria-hidden="true"
      >
        <img src={imageLinks[focusedImage]} alt="item" css={styles.image} />
        <div
          css={styles.seeImageCaption}
          onClick={() => setIsModalOpen(true)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => handleKeyDownShowModal(e)}
        >
          {t('item:showImageCaption')}
        </div>
      </div>
      <ImageModal
        image={imageLinks[focusedImage]}
        isOpen={isModalOpen}
        setModalVisible={setIsModalOpen}
      />
    </div>
  );
};
