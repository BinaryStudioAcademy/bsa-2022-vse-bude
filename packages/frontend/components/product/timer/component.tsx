import moment from 'moment';
import type { TimerProps } from './types';
import { timerValue, timerBadge } from './styles';

export const ProductTimer = (props: TimerProps) => {
  const timeString = (date: Date): string => {
    const now = moment();
    const endDate = moment(date);
    const toTheEnd = moment.duration(endDate.diff(now));

    return `${toTheEnd.days()} days ${toTheEnd.hours()} h ${toTheEnd.minutes()} min`;
  };

  return (
    <div css={timerBadge}>
      <div className="timerIcon"></div>
      <div css={timerValue}>{timeString(props.date)}</div>
    </div>
  );
};
