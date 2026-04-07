'use client';

import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { useTimer } from '../hooks/useTimer';

type TimerContextValue = ReturnType<typeof useTimer>;

const TimerContext = createContext<TimerContextValue | null>(null);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const timer = useTimer();

  return <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>;
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within TimerProvider');
  }
  return context;
};
