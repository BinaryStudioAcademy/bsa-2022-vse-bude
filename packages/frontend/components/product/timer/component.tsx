import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { timeToEventObj, timeToEventString } from '../../../helpers/time';
import type { TimerTranslations } from '../../../common/types/timer/translations';
import type { TimerProps } from './types';
import { timerValue, timerBadge, timerIcon } from './styles';

function useTimeTranslations () {
  const { t } = useTranslation('common');
  const timeTranslations: TimerTranslations = {
    daysText: t('DAYS_SHORT'),
    hoursText: t('HOURS_SHORT'),
    minsText: t('MINUTES_SHORT'),
    secsText: t('SECONDS_SHORT'),
  };

  return timeTranslations;
}

function useTimer(date: Date, interval = 1000) {
  const timeTranslations = useTimeTranslations();

  const [timeString, setTimeString] = useState(
    timeToEventString(date, timeTranslations)
  );
  const toTheEndObj = timeToEventObj(date);

  useEffect(() => {
    if (!toTheEndObj.days()) {
      const timer = setInterval(() => {
        setTimeString(timeToEventString(date, timeTranslations));
      }, interval);
      setTimeout(() => {
        clearInterval(timer);
      }, toTheEndObj.seconds() * interval);
    }
  }, [toTheEndObj, date, interval, timeTranslations]);

  return timeString;
}

export const ProductTimer = (props: TimerProps) => {
  const stringVal = useTimer(props.date);

  return (
    <div css={timerBadge}>
      <div css={timerIcon}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div css={timerValue} suppressHydrationWarning={true}>
        {!stringVal && 'Loading...'}
        {!!stringVal && stringVal}
      </div>
    </div>
  );
};
