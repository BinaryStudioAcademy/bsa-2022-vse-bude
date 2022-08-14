import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { ImageSliderProps } from './types';
import { imageSliderBlock } from './styles';
import { SliderControls } from './controls';

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const maxSlide = images.length - 1;
  const [slide, setSlide] = useState(0);
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[slide]);
  }, [slide, images]);

  const onPrevImage = () => {
    if (slide) {
      setSlide(slide - 1);
    }
  };

  const onNextImage = () => {
    if (slide !== maxSlide) {
      setSlide(slide + 1);
    }
  };

  return (
    <div css={imageSliderBlock}>
      <Image src={image} layout="fill" />
      <SliderControls
        onPrev={onPrevImage}
        onNext={onNextImage}
        currSlide={slide}
        maxSlide={maxSlide}
      />
    </div>
  );
};
