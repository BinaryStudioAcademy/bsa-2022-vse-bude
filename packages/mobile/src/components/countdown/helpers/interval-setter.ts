import { getStrictTimeToEvent } from '~/helpers/date/date';

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const intervalSetter = (
  setState: (value: Time) => void,
  endDate: Date,
): number => {
  setState(getStrictTimeToEvent(endDate));
  const intervalId = setInterval(() => {
    const { days, hours, minutes, seconds, totalMs } =
      getStrictTimeToEvent(endDate);
    setState({ days, hours, minutes, seconds });
    if (totalMs < 1) {
      clearInterval(intervalId);
    }
  }, 1000);

  return intervalId;
};

export { intervalSetter };
