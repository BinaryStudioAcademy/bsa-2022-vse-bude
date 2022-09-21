import { RootState } from '~/common/types/types';

const selectFilters = (state: RootState) => state.filters;

export { selectFilters };
