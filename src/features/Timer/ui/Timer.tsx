'use client';
import { useTimerContext } from '@/features/Timer';
import TimerStart from '@/shared/assets/timer-star.svg';

interface TimerProps {
  className?: string;
}

export const Timer = (props: TimerProps) => {
  const { className = '' } = props;
  const { currentTime, isBlink, color } = useTimerContext();

  return (
    <div
      className={`${className} flex gap-2 items-center`}
      style={{ color }}
    >
      <TimerStart />

      <span
        className={`font-bold font-second text-[clamp(28px,8vw,40px)] py-1 leading-none ${isBlink ? 'animate-pulse' : ''}`}
      >
        {currentTime}
      </span>

      <TimerStart />
    </div>
  );
};
