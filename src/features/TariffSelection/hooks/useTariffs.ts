import { useEffect, useState } from 'react';

import { useTariffSelectionQuery } from '@/features/TariffSelection/hooks/useTariffSelectionQuery';

export const useTariffs = () => {
  const [checkedTariff, setCheckedTariff] = useState<string | null>(null);

  const onChangeTariff = (currentTariff: string) => {
    setCheckedTariff(currentTariff);
  };

  const { tariffs } = useTariffSelectionQuery();

  const sortedTariffs = [...(tariffs || [])].sort((a, b) => {
    if (a.is_best === b.is_best) return 0;
    return a.is_best ? -1 : 1;
  });

  useEffect(() => {
    if (sortedTariffs.length > 0 && !checkedTariff) {
      const bestTariff = sortedTariffs.find((t) => t.is_best) || sortedTariffs[0];
      setCheckedTariff(bestTariff.id + bestTariff.price);
    }
  }, [sortedTariffs, checkedTariff]);

  return {
    tariffs: sortedTariffs,
    onChangeTariff,
    checkedTariff,
  };
};
