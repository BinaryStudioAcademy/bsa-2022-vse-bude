import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useTimer } from '@hooks';
import { Icon } from '@primitives';
import { IconColor, IconName } from '@enums';
import { timeToEventString } from '../../../helpers/time';
import type { TimerTranslations } from '../../../common/types/timer';
import type { TimerProps } from './types';
import { timerBadge, timerIcon } from './styles';

function useTimeTranslations() {
  const { t } = useTranslation();
  const timeTranslations: TimerTranslations = {
    daysText: t('common:components.product.time.days'),
    hoursText: t('common:components.product.time.hours'),
    minsText: t('common:components.product.time.minutes'),
    secsText: t('common:components.product.time.seconds'),
  };

  return timeTranslations;
}

export const ProductTimer = ({ date }: TimerProps) => {
  const timeTranslations = useTimeTranslations();
  const [timerValue, setTimerValue] = useState(
    timeToEventString(date, timeTranslations),
  );

  useTimer(() => {
    setTimerValue(timeToEventString(date, timeTranslations));
  });

  return (
    <div css={timerBadge}>
      <div css={timerIcon}>
        <Icon icon={IconName.STOPWATCH} color={IconColor.BLACK} />
      </div>
      <div suppressHydrationWarning={true}>{timerValue}</div>
    </div>
  );
};
