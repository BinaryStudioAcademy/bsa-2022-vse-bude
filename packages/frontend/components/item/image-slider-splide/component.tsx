import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { useState } from 'react';
import { ImageModal } from '../image-modal/component';

import * as styles from './styles';

interface ImageSliderSplideProps {
  imageLinks: string[];
}

const ImageSliderSplide = ({ imageLinks }: ImageSliderSplideProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div css={styles.wrapper}>
      <Splide
        options={{
          pagination: false,
          arrows: false,
        }}
        onMove={(splide) => setCurrentImage(splide.index)}
      >
        {imageLinks.map((link, index) => (
          <SplideSlide key={link + index}>
            <div
              css={styles.imageWrapper}
              onClick={() => setIsModalOpen(true)}
              aria-hidden="true"
            >
              <Image
                src={link}
                alt="item"
                key={link + index}
                layout="fill"
                objectFit="contain"
                css={styles.image}
                priority={index === 0}
              />
            </div>
            <span css={styles.numberSlide}>
              <span css={styles.current}>{index + 1}</span>/
              <span>{imageLinks.length}</span>
            </span>
          </SplideSlide>
        ))}
      </Splide>
      <ImageModal
        isOpen={isModalOpen}
        setModalVisible={setIsModalOpen}
        image={imageLinks[currentImage]}
      />
    </div>
  );
};

export { ImageSliderSplide };
