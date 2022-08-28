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
    daysText: t('item:time.days'),
    hoursText: t('item:time.hours'),
    minsText: t('item:time.minutes'),
    secsText: t('item:time.seconds'),
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
};
