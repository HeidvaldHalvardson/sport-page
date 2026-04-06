import type { Tariff } from '../model/types';

export const getTariffs = async (): Promise<Tariff[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/GetTariffs`);
  if (!response.ok) throw new Error('Ошибка загрузки тарифов');
  return response.json();
};
