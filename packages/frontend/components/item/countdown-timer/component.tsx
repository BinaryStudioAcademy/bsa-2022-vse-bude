import { useTimer } from '@hooks';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import type { TimerTranslations } from '@types';
import { timeToEventObj } from 'helpers/time';
import * as styles from './styles';

function convertDateToObj(targetDate) {
  const timer = timeToEventObj(targetDate);

  return {
    days: timer.get('days'),
    hours: timer.get('hours'),
    minutes: timer.get('minutes'),
    seconds: timer.get('seconds'),
  };
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

interface CountDownTimerProps {
  targetDate: Date;
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
    setTimerValue(convertDateToObj(targetDate));
  });

  const getShownValue = (value: number) =>
    value >= 10 ? `${value}` : value >= 0 ? `0${value}` : `00`;

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
