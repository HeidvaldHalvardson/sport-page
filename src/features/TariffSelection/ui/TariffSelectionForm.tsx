'use client';

import { useState } from 'react';

import CheckSvg from '@/shared/assets/check.svg';
import SymbolSvg from '@/shared/assets/symbol.svg';
import { Button } from '@/shared/ui/Button';

import { TariffCard } from './TariffCard';
import { useTariffs } from '../hooks/useTariffs';

interface TariffSelectionFormProps {
  className?: string;
}

export const TariffSelectionForm = (props: TariffSelectionFormProps) => {
  const { className = '' } = props;
  const { tariffs, onChangeTariff, checkedTariff } = useTariffs();
  const [isConfirm, setIsConfirm] = useState(true);
  const [isConfirmError, setIsConfirmError] = useState(false);

  if (!tariffs || !tariffs?.length) {
    return <span className="text-white">Тарифы не найдены</span>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfirm) {
      setIsConfirmError(true);
      return;
    }
    setIsConfirmError(false);
  };

  return (
    <form
      className={`${className}`}
      onSubmit={handleSubmit}
    >
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 md:gap-2.5 lg:gap-3.5">
        {tariffs.map((tariff, index) => {
          return (
            <TariffCard
              className={`${index === 0 && 'col-span-full'}`}
              key={tariff.id + tariff.price}
              tariff={tariff}
              isChecked={checkedTariff === tariff.id + tariff.price}
              onChange={onChangeTariff}
            />
          );
        })}
      </ul>
      <div className="mt-5 p-5 mb-4 bg-[#2d3233] rounded-[20px] flex gap-2 lg:w-2/3 lg:mb-8">
        <div className="flex items-center justify-center w-6 h-6">
          <SymbolSvg />
        </div>
        <p className="text-white text-[clamp(12px,2vw,16px)]">
          Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
        </p>
      </div>
      <label className="flex gap-2 items-center leading-tight lg:w-2/3 mb-4">
        <div
          className={`w-[30px] h-[30px] rounded-[5px] border-1 flex flex-shrink-0 justify-center items-center ${isConfirmError ? 'border-red-500' : 'border-[#606566]'}`}
        >
          {isConfirm ? <CheckSvg /> : null}
        </div>
        <p className="text-[#cdcdcd] text-[clamp(12px,2vw,16px)]">
          Я согласен с{' '}
          <a
            href="#"
            className="underline"
          >
            офертой рекуррентных платежей
          </a>{' '}
          и{' '}
          <a
            href="#"
            className="underline"
          >
            Политикой конфиденциальности
          </a>
        </p>
        <input
          className="hidden"
          type="checkbox"
          name="confirm"
          checked={isConfirm}
          onChange={() => {
            setIsConfirm((prev) => !prev);
            setIsConfirmError(false);
          }}
        />
      </label>
      <Button
        className="lg:max-w-[350px] mb-4 animate-pulse"
        type="submit"
      >
        Купить
      </Button>
      <p className="text-[10px] lg:text-[14px] text-[#9b9b9b]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
        получения пожизненного доступа к приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
        сервиса в случае желания пользователя.
      </p>
    </form>
  );
};
