import type { Dispatch } from 'react';

export interface PromoProps {
  searchQuery: string;
  setSearchQuery: Dispatch<string>;
}
