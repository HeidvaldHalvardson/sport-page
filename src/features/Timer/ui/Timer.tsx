'use client';
import TimerStart from '@/shared/assets/timer-star.svg';

import { useTimer } from '../hooks/useTimer';

interface TimerProps {
  className?: string;
}

export const Timer = (props: TimerProps) => {
  const { className = '' } = props;
  const { currentTime, isBlink, color } = useTimer();

  return (
    <div
      className={`${className} flex gap-2 items-center`}
      style={{ color }}
    >
      <TimerStart />

      <span
        className={`font-bold text-[clamp(28px,8vw,40px)] leading-none ${isBlink ? 'animate-pulse' : ''}`}
      >
        {currentTime}
      </span>

      <TimerStart />
    </div>
  );
};
