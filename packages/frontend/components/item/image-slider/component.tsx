import { useState } from 'react';
import { ImageModal } from '../image-modal/component';
import { ItemImageSliderSmall } from './image-slider-small/component';
import { ItemImageSliderLarge } from './image-slider-large/component';

import * as styles from './styles';

interface ItemImageSliderProps {
  imageLinks: string[];
}

const ItemImageSlider = ({ imageLinks }: ItemImageSliderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <div css={styles.desktopWrapper}>
        <ItemImageSliderLarge
          imageLinks={imageLinks}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          setOpenModal={setIsModalOpen}
        />
      </div>
      <div css={styles.mobileWrapper}>
        <ItemImageSliderSmall
          imageLinks={imageLinks}
          setCurrentImage={setCurrentImage}
          setOpenModal={setIsModalOpen}
        />
      </div>
      <ImageModal
        isOpen={isModalOpen}
        setModalVisible={setIsModalOpen}
        image={imageLinks[currentImage]}
      />
    </>
  );
};

export { ItemImageSlider };
