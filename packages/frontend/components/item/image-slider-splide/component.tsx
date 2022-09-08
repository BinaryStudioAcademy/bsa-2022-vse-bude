import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import * as styles from './styles';

interface ImageSliderSplideProps {
  imageLinks: string[];
}

const ImageSliderSplide = ({ imageLinks }: ImageSliderSplideProps) => (
  <div css={styles.wrapper}>
    <Splide
      options={{
        pagination: false,
        arrows: false,
      }}
    >
      {imageLinks.map((link, index) => (
        <SplideSlide key={link + index}>
          <div css={styles.imageWrapper}>
            <Image
              src={link}
              alt="item"
              key={link + index}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <span css={styles.numberSlide}>
              <span css={styles.current}>{index + 1}</span>/
              <span>{imageLinks.length}</span>
            </span>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
);

export { ImageSliderSplide };
