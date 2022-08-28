import { useTimer } from '@hooks';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import type { TimerTranslations } from '@types';
import { timeToEventObj } from 'helpers/time';
import * as styles from './styles';

interface CountDownTimerProps {
  targetDate: Date;
}

function useTimeTranslations() {
  const { t } = useTranslation();
  const timeTranslations: TimerTranslations = {
    daysText: t('common:components.item.time.days'),
    hoursText: t('common:components.item.time.hours'),
    minsText: t('common:components.item.time.minutes'),
    secsText: t('common:components.item.time.seconds'),
  };

  return timeTranslations;
}

export const CountDownTimer = ({ targetDate }: CountDownTimerProps) => {
  const timeTranslations = useTimeTranslations();
  const [timerValue, setTimerValue] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useTimer(() => {
    setTimerValue(timeToEventObj(targetDate).$d);
  });

  const getShownValue = (value: number) =>
    value >= 10 ? `${value}` : `0${value}`;

  if (
    timerValue.days +
      timerValue.hours +
      timerValue.minutes +
      timerValue.seconds <=
    0
  ) {
    return <div>Expired!</div>;
  } else {
    return (
      <div css={styles.wrapper}>
        <div>
          <span>{getShownValue(timerValue.days)}</span>
          <span>{timeTranslations.daysText}</span>
        </div>
        <div>
          <span>{getShownValue(timerValue.hours)}</span>
          <span>{timeTranslations.hoursText}</span>
        </div>
        <div>
          <span>{getShownValue(timerValue.minutes)}</span>
          <span>{timeTranslations.minsText}</span>
        </div>
        <div>
          <span>{getShownValue(timerValue.seconds)}</span>
          <span>{timeTranslations.secsText}</span>
        </div>
      </div>
    );
  }
};
