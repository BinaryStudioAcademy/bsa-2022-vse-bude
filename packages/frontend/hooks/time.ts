import { useEffect, useRef } from 'react';

const DEFAULT_INTERVAL = 1000;

export function useTimer(
  timeoutCallback: () => void,
  interval = DEFAULT_INTERVAL,
) {
  const timerCallback = useRef(null);
  if (timerCallback.current === null) {
    timerCallback.current = timeoutCallback;
  }

  useEffect(() => {
    timerCallback.current();
    const timer = setInterval(timerCallback.current, interval);

    return () => clearInterval(timer);
  }, [interval, timerCallback]);
}
