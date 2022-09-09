import { useState } from 'react';
import Image from 'next/future/image';
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
        priority={priority}
        src={images[slide]}
        width={260}
        height={300}
        alt={`${slide}`}
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
