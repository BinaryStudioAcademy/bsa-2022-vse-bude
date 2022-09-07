import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@components/primitives';
import * as styles from './styles';

interface ItemImageSliderProps {
  imageLinks: string[];
}

export const ItemImageSlider = ({ imageLinks }: ItemImageSliderProps) => {
  const [focusedImage, setFocusedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (imageLink) => {
    setFocusedImage(imageLink);
  };
  const extendLinks = [
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
    'https://loremflickr.com/640/480/abstract',
  ];

  imageLinks = [...imageLinks, ...extendLinks];

  return (
    <div css={styles.sliderWrapper}>
      <div css={styles.imagesWrapper}>
        {imageLinks.map((link, index) => (
          <div
            key={link + index}
            css={[styles.image, index === focusedImage && styles.pickedImage]}
          >
            <Image
              key={index}
              onClick={() => handleClick(index)}
              src={link}
              alt="item image"
              layout="fill"
            />
          </div>
        ))}
      </div>
      <div css={styles.focusedImage}>
        <Image
          src={imageLinks[focusedImage]}
          onClick={() => setIsModalOpen(true)}
          alt="item image"
          layout="fill"
          objectFit="cover"
        />
        <div
          css={styles.seeImageCaption}
          onClick={() => setIsModalOpen(true)}
          aria-hidden="true"
        >
          Open full image
        </div>
      </div>
      <Modal visible={isModalOpen}>
        <div css={styles.modalImage}>
          <Image
            src={imageLinks[focusedImage]}
            onClick={() => setIsModalOpen(false)}
            alt="item image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Modal>
    </div>
  );
};
