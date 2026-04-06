import { Timer } from '@/features/Timer';

export const Header = () => {
  return (
    <header className="bg-header-bg p-2 flex flex-col items-center">
      <p className="text-[clamp(14px,4vw,24px)] text-white font-[600] mb-1">
        Успейте открыть пробную неделю
      </p>
      <Timer />
    </header>
  );
};
