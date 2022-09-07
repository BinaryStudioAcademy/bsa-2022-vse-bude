import { useEffect, useRef, useState } from 'react';
import { ImageModal } from '../image-modal/component';
import * as styles from './styles';

interface ItemImageSliderProps {
  imageLinks: string[];
}

export const ItemImageSlider = ({ imageLinks }: ItemImageSliderProps) => {
  const [focusedImage, setFocusedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imagesWrapper = useRef<HTMLDivElement>(null);

  const handleClick = (imageLink) => {
    setFocusedImage(imageLink);
  };
  const extendLinks = [
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
  ];

  imageLinks = [...imageLinks, ...extendLinks];

  useEffect(() => {
    function handleWheelScroll(e) {
      e.preventDefault();
      imagesWrapper.current.scrollLeft += e.deltaY;
      imagesWrapper.current.scrollTop += e.deltaY;
    }
    imagesWrapper.current.addEventListener('wheel', handleWheelScroll);
  }, []);

  return (
    <div css={styles.sliderWrapper}>
      <div css={styles.imagesWrapper} ref={imagesWrapper}>
        {imageLinks.map((link, index) => (
          <div
            key={link + index}
            css={[
              styles.imageWrapper,
              index === focusedImage && styles.pickedImage,
            ]}
            onClick={() => handleClick(index)}
            aria-hidden="true"
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
          aria-hidden="true"
        >
          Open full image
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
