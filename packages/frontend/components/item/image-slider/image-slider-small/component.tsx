import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/future/image';

import * as styles from './styles';

interface ItemImageSliderSmallProps {
  imageLinks: string[];
  setCurrentImage: (value: number) => void;
  setOpenModal: (value: boolean) => void;
}

const ItemImageSliderSmall = ({
  imageLinks,
  setCurrentImage,
  setOpenModal,
}: ItemImageSliderSmallProps) => {
  const handleKeyCodes = ['Spaces', 'Enter'];

  const handleKeyDownShowModal = (e) => {
    handleKeyCodes.includes(e.code) && setOpenModal(true);
  };

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
              onClick={() => setOpenModal(true)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => handleKeyDownShowModal(e)}
            >
              <Image
                src={link}
                alt="item"
                key={link + index}
                fill
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
    </div>
  );
};

export { ItemImageSliderSmall };
