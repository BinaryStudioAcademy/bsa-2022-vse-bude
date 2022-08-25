import { RootState } from '~/common/types/types';
import { createSelector } from '@reduxjs/toolkit';

const selectProductById = (id: string) =>
  createSelector(
    (state: RootState) => state.products.products,
    (products) => {
      return products.find((item) => item.id === id);
    },
  );

export { selectProductById };
