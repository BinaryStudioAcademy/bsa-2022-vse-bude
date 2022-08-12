import type { Product } from './product';

export interface Category {
  id: string;
  title: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
}
