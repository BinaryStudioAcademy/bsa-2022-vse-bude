import { useEffect, useRef } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import type { TimerProps } from './types';
import { timerValue, timerBadge, timerIcon } from './styles';

export const ProductTimer = (props: TimerProps) => {
  const timerEl = useRef(null);
  const nowTime = moment();
  const endDateTime = moment(props.date);
  const toTheEndObj = moment.duration(endDateTime.diff(nowTime));

  const timeString = (date: Date): string => {
    const now = moment();
    const endDate = moment(date);
    const toTheEnd = moment.duration(endDate.diff(now));

    let timeString = '';
    const days = toTheEnd.days();
    if (days) {
      timeString += `${toTheEnd.days()} days `;
    }
    timeString += `${toTheEnd.hours()} h `;
    timeString += `${toTheEnd.minutes()} min`;
    if (!days) {
      timeString += ` ${toTheEnd.seconds()} s`;
    }

    return timeString;
  };

  useEffect(() => {
    timerEl.current.innerText = timeString(props.date);
    if (!toTheEndObj.days()) {
      const timer = setInterval(() => {
        timerEl.current.innerText = timeString(props.date);
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
      }, toTheEndObj.seconds() * 1000);
    }
  }, [toTheEndObj, props]);

  return (
    <div css={timerBadge}>
      <div css={timerIcon}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div css={timerValue} ref={timerEl}>
        Loading...
      </div>
    </div>
  );
};
