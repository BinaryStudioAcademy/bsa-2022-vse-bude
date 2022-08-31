import { getStrictTimeToEvent } from '~/helpers/date/date';
import { UPDATE_END_DATE_INTERVAL } from '~/common/constants/constants';

type Time = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const intervalSetter = (
  setState: (value: Time) => void,
  endDate: Date,
): number => {
  setState(getStrictTimeToEvent(endDate));
  const intervalId = setInterval(() => {
    const { totalMs, ...duration } = getStrictTimeToEvent(endDate);
    setState(duration);
    if (totalMs < 1) {
      clearInterval(intervalId);
    }
  }, UPDATE_END_DATE_INTERVAL);

  return intervalId;
};

export { intervalSetter };
