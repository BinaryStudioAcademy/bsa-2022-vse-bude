import { useState } from 'react';
import Image from 'next/image';
import type { ImageSliderProps } from './types';
import { imageSliderBlock } from './styles';
import { SliderControls } from './controls';

export const ImageSlider = ({ priority, images }: ImageSliderProps) => {
  const maxSlide = images.length - 1;
  const [slide, setSlide] = useState(0);

  const onPrevImage = () => {
    if (slide) {
      setSlide(slide - 1);
    }
  };

  const onNextImage = () => {
    if (slide < maxSlide) {
      setSlide(slide + 1);
    }
  };

  return (
    <div css={imageSliderBlock}>
      <Image
        priority={priority && slide < 2}
        src={images[slide]}
        objectFit="cover"
        layout="fill"
      />
      <SliderControls
        onPrev={onPrevImage}
        onNext={onNextImage}
        currSlide={slide}
        maxSlide={maxSlide}
      />
    </div>
  );
};
