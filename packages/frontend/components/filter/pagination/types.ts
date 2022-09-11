import type { PaginationFilter } from '../types';

export interface PaginationProps {
  filter: PaginationFilter;
  setFilter: (arg0: PaginationFilter) => void;
}
