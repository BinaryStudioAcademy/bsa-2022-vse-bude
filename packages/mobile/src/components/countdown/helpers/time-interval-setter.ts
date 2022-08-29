import { getStrictTimeToEvent } from '~/helpers/date/date';

type time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const timeIntervalSetter = (
  stateSet: (value: time) => void,
  endDate: Date,
): void => {
  const { days, hours, minutes, seconds } = getStrictTimeToEvent(endDate);
  const intervalId = setInterval(() => {
    stateSet(getStrictTimeToEvent(endDate));
    if (!days && !hours && !minutes && !seconds) {
      clearInterval(intervalId);
    }
  }, 1000);
};

export { timeIntervalSetter };
