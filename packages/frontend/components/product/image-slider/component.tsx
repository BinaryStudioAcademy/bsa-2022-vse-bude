import { useState } from 'react';
import { ImageWithFallback } from '@primitives';
import no_image from '../../../public/images/no_image.png';
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
      <ImageWithFallback
        priority={priority}
        width={260}
        height={300}
        alt={`${slide}`}
        src={images[slide]}
        fallbackSrc={no_image}
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
