import { useEffect, useMemo, useState } from 'react';

import { totalTime } from '../model/constants';

export const useTimer = () => {
  const [seconds, setSeconds] = useState(totalTime);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const isBlink = useMemo(() => seconds <= 30 && seconds > 0, [seconds]);

  const getColor = () => {
    if (seconds <= 0) return '#fff';
    if (seconds <= 30) return '#ff4e4e';
    return '#fb0';
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  return {
    currentTime: formatTime(seconds),
    isBlink,
    color: getColor(),
  };
};
