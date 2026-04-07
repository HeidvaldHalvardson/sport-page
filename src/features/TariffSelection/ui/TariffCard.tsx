import { useTimerContext } from '@/features/Timer';

import type { Tariff } from '../model/types';

interface TariffCardProps {
  className?: string;
  tariff: Tariff;
  isChecked: boolean;
  onChange: (value: string) => void;
}

export const TariffCard = (props: TariffCardProps) => {
  const { isEnd } = useTimerContext();
  const { className = '', tariff, isChecked, onChange } = props;

  const discountPercent = Math.round(
    ((tariff.full_price - tariff.price) / tariff.full_price) * 100,
  );

  const handleChange = () => {
    onChange(tariff.id + tariff.price);
  };

  return (
    <label
      className={`${className} relative block rounded-[20px] lg:rounded-[34px] bg-[#313637] p-5 lg:pt-[70px] cursor-pointer overflow-hidden`}
      style={{ boxShadow: isChecked ? 'inset 0 0 0 2px #fdb056' : 'inset 0 0 0 2px #484d4e' }}
    >
      {tariff.is_best && (
        <div className="absolute top-1 right-4 md:top-2.5 md:right-5 text-gold-main">хит!</div>
      )}
      {discountPercent && !isEnd && (
        <div
          className={`bg-[#fd5656] rounded-b-[8px] font-[500] px-2 py-1 w-fit absolute top-0 text-white ri text-[clamp(13px,4vw,22px)] ${tariff.is_best ? 'right-14' : 'right-8'} lg:right-0 lg:left-14`}
        >
          {discountPercent}%
        </div>
      )}
      <div
        className={`grid grid-cols-2 ${tariff.is_best ? 'lg:grid-cols-[1fr_2fr]' : 'lg:grid-cols-1'} gap-9 text-white text-[clamp(16px,4vw,26px)] font-[500] mb-3 items-center`}
      >
        <div
          className={`lg:flex flex-col ${tariff.is_best ? 'items-end' : 'lg:grid-cols-1 items-center'}`}
        >
          {tariff.period}
          <div className="w-fit relative">
            <p
              className={`transition-all duration-500 ease-out ${
                isEnd
                  ? 'opacity-0 translate-y-4 absolute'
                  : `relative opacity-100 translate-y-0 text-[clamp(30px,5vw,50px)] font-[600] ${tariff.is_best ? 'text-gold-main' : 'text-white'}`
              }`}
            >
              {tariff.price}&nbsp;₽
            </p>
            <p
              className={`transition-all duration-500 ease-out ${
                isEnd
                  ? `relative opacity-100 translate-y-0 text-[clamp(30px,5vw,50px)] font-[600] ${tariff.is_best ? 'text-gold-main' : 'text-white'}`
                  : 'opacity-100 text-[clamp(14px,4vw,24px)] text-right text-[#919191] font-normal line-through'
              }`}
            >
              {tariff.full_price}&nbsp;₽
            </p>
          </div>
        </div>
        <div className="text-[12px] lg:text-[16px] font-normal py-2">{tariff.text}</div>
      </div>
      <input
        type="radio"
        className="hidden"
        name="tariff"
        value={tariff.id}
        checked={isChecked}
        onChange={handleChange}
      />
    </label>
  );
};
