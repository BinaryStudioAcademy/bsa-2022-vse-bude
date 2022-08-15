import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '@vse-bude/shared';
import { sliderControls } from './styles';
import type { SliderControlsProps } from './types';

export const SliderControls = ({
  onNext,
  onPrev,
  currSlide,
  maxSlide,
}: SliderControlsProps) => (
  <div css={sliderControls} className="sliderControls">
    <span>
      {!!currSlide && (
        <FontAwesomeIcon
          size="lg"
          icon={faCircleChevronLeft}
          color={ColorPalette.GRAY_200}
          onClick={onPrev}
        />
      )}
    </span>
    <span>
      {currSlide !== maxSlide && (
        <FontAwesomeIcon
          size="lg"
          icon={faCircleChevronRight}
          color={ColorPalette.GRAY_200}
          onClick={onNext}
        />
      )}
    </span>
  </div>
);
