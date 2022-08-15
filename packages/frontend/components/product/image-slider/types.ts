export interface ImageSliderProps {
  images: string[];
}

export interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currSlide: number;
  maxSlide: number;
}
