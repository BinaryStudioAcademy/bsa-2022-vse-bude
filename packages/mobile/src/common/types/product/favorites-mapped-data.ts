import { ProductStatus } from '@vse-bude/shared';

type FavoritesMappedData = {
  description: string;
  imageLinks: string[];
  price: string | number;
  status: ProductStatus;
  title: string;
  id: string;
};

export type { FavoritesMappedData };
