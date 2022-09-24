import { ProductStatus } from '@vse-bude/shared';

type FavoriteResponseDto = {
  currentPrice: null | number;
  minimalBid: null | number;
  price: null | number;
  product: {
    description: string;
    imageLinks: string[];
    price: string | number;
    status: ProductStatus;
    title: string;
  };
  productId: string;
  recommendedPrice: null | number;
  userId: string;
};

export type { FavoriteResponseDto };
