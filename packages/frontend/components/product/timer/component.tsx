import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { timeToEventObj, timeToEventString } from '../../../helpers/time';
import type { TimerTranslations } from '../../../common/types/timer';
import { useTimer } from '../../../hooks/time';
import type { TimerProps } from './types';
import { timerBadge, timerIcon } from './styles';

function useTimeTranslations() {
  const { t } = useTranslation('common');
  const timeTranslations: TimerTranslations = {
    daysText: t('DAYS_SHORT'),
    hoursText: t('HOURS_SHORT'),
    minsText: t('MINUTES_SHORT'),
    secsText: t('SECONDS_SHORT'),
  };

  return timeTranslations;
}

export const ProductTimer = ({ date }: TimerProps) => {
  const timeTranslations = useTimeTranslations();
  const [timerValue, setTimerValue] = useState(
    timeToEventString(date, timeTranslations),
  );

  useTimer(() => {
    const toTheEndObj = timeToEventObj(date);
    if (!toTheEndObj.days()) {
      setTimerValue(timeToEventString(date, timeTranslations));
    }
  });

  return (
    <div css={timerBadge}>
      <div css={timerIcon}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div css={timerValue} suppressHydrationWarning={true}>
        {timerValue}
      </div>
    </div>
  );
};
