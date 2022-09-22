import { RootState } from '@types';
import { useMemo } from 'react';
import { useTypedSelector } from './store';

export const useInFavorite = (productId: string) => {
  const productsIds = useTypedSelector(
    (state: RootState) => state.favoriteProduct.productsIds,
  );

  return useMemo(
    () => productsIds.includes(productId),
    [productsIds, productId],
  );
};
