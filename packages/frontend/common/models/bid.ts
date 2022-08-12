import type { Product } from './product';
import type { User } from './user';

export interface Bid {
  id: string;
  bidder: User;
  bidderId: string;
  product: Product;
  productId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}
