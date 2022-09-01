import { useEffect, useState } from 'react';
import { getStrictTimeToEvent } from '~/helpers/date/date';
import { UPDATE_END_DATE_INTERVAL_MILLISECONDS } from '~/common/constants/constants';

const useCountdownInterval = (endDate: Date) => {
  const [duration, setDuration] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  useEffect(() => {
    setDuration(getStrictTimeToEvent(endDate));
    const intervalId = setInterval(() => {
      const { totalMs, ...duration } = getStrictTimeToEvent(endDate);
      setDuration(duration);
      if (totalMs < 1) {
        clearInterval(intervalId);
      }
    }, UPDATE_END_DATE_INTERVAL_MILLISECONDS);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return duration;
};

export { useCountdownInterval };
