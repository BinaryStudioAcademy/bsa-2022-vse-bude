import { useMemo } from 'react';
import { useTypedSelector } from './store';

export const useInFavorite = (productId: string) => {
  const { favoriteProducts } = useTypedSelector((state) => state.product);

  return useMemo(
    () => favoriteProducts.includes(productId),
    [favoriteProducts, productId],
  );
};
