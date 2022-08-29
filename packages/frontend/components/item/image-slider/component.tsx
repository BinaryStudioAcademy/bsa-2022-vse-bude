import { useState } from 'react';
import Image from 'next/image';
import * as styles from './styles';

interface ItemImageSliderProps {
  imageLinks: string[];
}

export const ItemImageSlider = ({ imageLinks }: ItemImageSliderProps) => {
  const [focusedImage, setFocusedImage] = useState(imageLinks[0]);

  const handleClick = (imageLink) => {
    setFocusedImage(imageLink);
  };

  return (
    <div css={styles.sliderWrapper}>
      <div css={styles.imagesWrapper}>
        {imageLinks.map((link, index) => (
          <div
            key={link + index}
            css={[styles.image, link === focusedImage && styles.pickedImage]}
          >
            <Image
              key={index}
              onClick={() => handleClick(link)}
              src={link}
              alt="item image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div css={styles.focusedImage}>
        <Image
          src={focusedImage}
          alt="item image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
