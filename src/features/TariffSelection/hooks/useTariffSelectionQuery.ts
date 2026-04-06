import { useQuery } from '@tanstack/react-query';

import { getTariffs } from '@/features/TariffSelection/api/getTariffs';

export const useTariffSelectionQuery = () => {
  const {
    data: tariffs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tariffs'],
    queryFn: getTariffs,
  });

  return {
    tariffs,
    isLoading,
    error,
  };
};
