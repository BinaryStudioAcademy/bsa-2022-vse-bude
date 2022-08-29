import { useMemo } from 'react';
import { useTypedSelector } from './store';

export const useInFavorite = (productId: string) => {
  const { productsIds } = useTypedSelector((state) => state.favoriteProduct);

  return useMemo(
    () => productsIds.includes(productId),
    [productsIds, productId],
  );
};
