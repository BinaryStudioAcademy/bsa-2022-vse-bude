import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
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
        <IconButton
          size="sm"
          icon={IconName.ANGLE_LEFT}
          color={IconColor.GREEN}
          backgroundColor="darkgray"
          onClick={onPrev}
        />
      )}
    </span>
    <span>
      {currSlide !== maxSlide && (
        <IconButton
          size="sm"
          icon={IconName.ANGLE_RIGHT}
          color={IconColor.GREEN}
          backgroundColor="darkgray"
          onClick={onNext}
        />
      )}
    </span>
  </div>
);
