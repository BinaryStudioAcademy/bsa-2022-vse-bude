import { useEffect, useState } from 'react';
import { getStrictTimeToEvent } from '~/helpers/date/date';
import { UPDATE_END_DATE_INTERVAL_MILLISECONDS } from '~/common/constants/constants';
import { useTranslation } from '~/hooks/hooks';

const useCountdownInterval = (endDate: Date) => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [timeNames, setTimeNames] = useState({
    daysName: t('common:time.DAYS'),
    hoursName: t('common:time.HOURS'),
    minutesName: t('common:time.MINUTES_SHORT'),
    secondsName: t('common:time.SECONDS_SHORT'),
  });
  useEffect(() => {
    const { values, names } = getStrictTimeToEvent(endDate);
    setDuration(values);
    setTimeNames(names);
    const intervalId = setInterval(() => {
      const {
        values: { totalMs, ...duration },
        names,
      } = getStrictTimeToEvent(endDate);
      setTimeNames(names);
      setDuration(duration);
      if (totalMs < 1) {
        clearInterval(intervalId);
      }
    }, UPDATE_END_DATE_INTERVAL_MILLISECONDS);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return { duration, timeNames };
};

export { useCountdownInterval };
