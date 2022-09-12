import { useEffect, useState } from 'react';
import { getStrictTimeToEvent } from '~/helpers/date/date';
import { UPDATE_END_DATE_INTERVAL_MILLISECONDS } from '~/common/constants/constants';

const useCountdownInterval = (endDate: string) => {
  const [duration, setDuration] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setDuration(getStrictTimeToEvent(endDate));
    const intervalId = setInterval(() => {
      const { totalMs, ...time } = getStrictTimeToEvent(endDate);
      setDuration(time);
      if (totalMs < 1) {
        clearInterval(intervalId);
      }
    }, UPDATE_END_DATE_INTERVAL_MILLISECONDS);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return duration;
};

export { useCountdownInterval };
