import { useCountdown } from '@hooks';
import * as styles from './styles';

interface CountDownTimerProps {
  targetDate: Date;
}

export const CountDownTimer = ({ targetDate }: CountDownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const getShownValue = (value: number) =>
    value >= 10 ? `${value}` : `0${value}`;

  if (days + hours + minutes + seconds <= 0) {
    return <div>Expired!</div>;
  } else {
    return (
      <div css={styles.wrapper}>
        <div>
          <span>{getShownValue(days)}</span>
          <span>days</span>
        </div>
        <div>
          <span>{getShownValue(hours)}</span>
          <span>hours</span>
        </div>
        <div>
          <span>{getShownValue(minutes)}</span>
          <span>min</span>
        </div>
        <div>
          <span>{getShownValue(seconds)}</span>
          <span>sec</span>
        </div>
      </div>
    );
  }
};
