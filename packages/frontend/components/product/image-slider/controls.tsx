import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
import { useTranslation } from 'next-i18next';
import { sliderControls } from './styles';
import type { SliderControlsProps } from './types';

export const SliderControls = ({
  onNext,
  onPrev,
  currSlide,
  maxSlide,
}: SliderControlsProps) => {
  const { t } = useTranslation();

  return (
    <div css={sliderControls} className="sliderControls">
      <span>
        {!!currSlide && (
          <IconButton
            size="sm"
            icon={IconName.ANGLE_LEFT}
            color={IconColor.GREEN}
            backgroundColor="darkgray"
            onClick={onPrev}
            ariaLabel={t('common:components.slider.prevStep')}
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
            ariaLabel={t('common:components.slider.nextStep')}
          />
        )}
      </span>
    </div>
  );
};
