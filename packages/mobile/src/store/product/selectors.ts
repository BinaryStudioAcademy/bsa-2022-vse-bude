import { RootState } from '~/common/types/types';

const selectProduct = (state: RootState) => {
  return state.product.product;
};

export { selectProduct };
